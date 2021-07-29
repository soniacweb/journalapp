require('dotenv').config()
const express = require('express');
const jwt = require('jsonwebtoken');

const bcrypt = require("bcrypt");
const { User, JournalEntry } = require("./db");
// const { sequelize, DataTypes, Model } = require('./db');


const app = express()

app.use(express.json())



// registration
app.post('/registration', async (req, res) => {
    const { username, password } = req.body
    const userExists = await User.findOne({ where: {username}}) // finds a particular user in db from body
    if (userExists) return res.sendStatus(401) // avoids user using existing username

    const passwordHash = await bcrypt.hash(password, 10) 
    await User.create({ username, passwordHash })
    console.log(userExists)
    res.sendStatus(201);
    
})

// login route send jwt token as a header authorization = bearer jwt token
// once user has logged in
// where the user gets the jwt token
app.post('/login', async (req, res) => {
    // get signed user from db
    const { username, password } = req.body
    const record = await User.findOne({ where: {username}})
    const verifyUser =  await bcrypt.compare(password, record.passwordHash) 

    if (verifyUser) {
        // .sign takes in arguments- first is the payload to serialize the user information from the body. 
        // serielize using the secretkey
        jwt.sign({username}, process.env.ACCESS_SECRET_TOKEN, { expiresIn: "2 days"}, (err, token) => {
            console.log(token);
            return res.send(token)   
    }) 
        } else {
        res.sendStatus(404);
        }
    })

    // app.get('/blog', authenticate, (req, res) => {
    //     res.json({
    //         message: 'hello from my blog'
    //     })
    // })
    
    // ********** post/create an entry after authentication **************

    // posting an entry by a specific user
    app.post('/users/:UserId/journalentries', authenticate, async (req, res) => {
        const { title, entry, date, image } = req.body
        const UserId = req.params.UserId
        // console.log('logging req.body', req.body)
        const journalEntry = await JournalEntry.create({ title, entry, date, image, UserId})
        res.send(journalEntry)
        // res.redirect(`/entry/${(journalEntry.id)}`)
    })
        

    // ******************** CRUD *****************************

    // GET: return the journal entry with the id specified in the URL
    app.get("/users/:UserId/journalentries/:id", async (req, res) => {
        const entryId = req.params.id;
        const singleEntry = await JournalEntry.findOne({ where: { id: entryId }})
        res.send(singleEntry);
    });
 

    // PUT: update an entry
    app.put("/users/:UserId/journalentries/:id", async (req, res) => {
        const { title, entry, date, image } = req.body
        const entryId = req.params.id;   // identifying specific id
        let indexToReplace = await JournalEntry.findByPk(entryId) // first id that matches with the searched id
        await indexToReplace.update({ title, entry, date, image }) // updates the existing id thats matched
        res.sendStatus(200)
    });

    // DELETE entry
    app.delete("/users/:UserId/journalentries/:id", async (req, res) => {
        const entryId = req.params.id;
        const userId = req.params.UserId
        try {
            let entryToDelete = await JournalEntry.findOne({ where: { id: entryId }})  // first id that matches with the searched id
            await entryToDelete.destroy(); // destroying the specific id from db
            res.sendStatus(200);

        } catch {
            res.sendStatus(500);
        }
    });

     // PATCH entry
     app.patch("/users/:UserId/journalentries/:id", async (req, res) => {
        const entryId = req.params.id;
        const userId = req.params.UserId
        const changes = req.body
        let entryToUpdate = await JournalEntry.findOne({ where: { id: entryId }})  // identifies id to change
        console.log(entryToUpdate)
        if (changes) {
            entryToUpdate.title = changes.title
            entryToUpdate.entry = changes.entry
            entryToUpdate.date = changes.date
            entryToUpdate.image = changes.image  
        }
            entryToUpdate.save()
            await res.sendStatus(202)
    });

// middleware function for authentication 
function authenticate(req, res, next) {
// get the token that JWT generates to verify this is the correct user and return that user in the post blog request
const authenticatedToken = req.headers.authorization.split(' ')[1] 
console.log(authenticatedToken) 
if (authenticatedToken === null) return res.sendStatus(401) // if null or undefined, return a 401 error

// at this point we know we have a valid token, so we need to verify it
try {
    const payLoad = jwt.verify(authenticatedToken, process.env.ACCESS_SECRET_TOKEN)
     req.username = payLoad.username
     next()
} catch {
    return res.sendStatus(403)
}

}



app.listen(5000, () => console.log('server listening on port 5000'))

module.exports = app;
