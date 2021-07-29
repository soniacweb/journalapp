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
    app.post('/journalentries/entry/user/:UserId', authenticate, async (req, res) => {
        const { title, entry, date, image } = req.body
        const UserId = req.params.UserId
        // console.log('logging req.body', req.body)
        const journalEntry = await JournalEntry.create({ title, entry, date, image, UserId})
        res.send(journalEntry)
        // res.redirect(`/entry/${(journalEntry.id)}`)
    })
        

    // ******************** CRUD *****************************

    // GET: return the journal entry with the id specified in the URL
    app.get("/journalentries/entry/:id", async (req, res) => {
        const entryId = req.params.id;
        const singleEntry = await JournalEntry.findOne({where: {id : entryId}})
        res.send(singleEntry);
    });
 

    // PUT: update an entry
    app.put("/journalentries/entry/:id", async (req, res, next) => {
        const entryId = req.params.id;   // identifying specific id
        const newEntryData = req.body; // what you're passing to the endpoint
        let indexToReplace = await JournalEntry.findOne({where: {id : entryId}}) // first id that matches with the searched id
        JournalEntry[indexToReplace] = newEntryData; // reassigning the updated airport
        console.log(JournalEntry[indexToReplace]);
        res.sendStatus(200);
        // res.sendStatus(201);
        
    });

    // DELETE entry
    app.delete("/journalentries/entry/:id", async (req, res) => {
        const entryId = req.params.id;
        let indexToDelete = await JournalEntry.findOne({where: {id : entryId}})  // first id that matches with the searched id
        const index = JournalEntry.indexOf(indexToDelete); //finds the array index of the argument that you pass in- where entry sits in db
        JournalEntry.splice(JournalEntry[index], 1); // reassigning the updated entry
        res.json(JournalEntry);
    });

     // PATCH entry
     app.patch("/journalentries/entry/:id", async (req, res) => {
        const entryId = req.params.id;
        let indexToDelete = await JournalEntry.findOne({where: {id : entryId}})  // first id that matches with the searched id
        // const index = JournalEntry.indexOf(indexToDelete); //finds the array index of the argument that you pass in- where entry sits in db
        // JournalEntry.splice(JournalEntry[index], 1); // reassigning the updated entry
        res.json(JournalEntry);
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
