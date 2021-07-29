const { Sequelize, DataTypes, Model } = require("sequelize");
const path = require("path");

// creates new sequalize instance
// dirname is the current directory your file is in
// this sequalize object represents our cnnection to the database

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: path.join(__dirname, "db.sqlite")
})

// The ORM process: Obect Relational Mapping
// creating a new sequalize model which allows us to abstract new instances (objects) of users from a class in javascript while working directly with sql. 
// which then writes sql queries and inserts into db for us. endpoints then directly communicate with db through sequalize.

class User extends Model {} // we have a base class called Model and we want to inherit that for User 

// user = subclass to model
User.init({
    username: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    
    passwordHash: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    sequelize,
    modelName: "User",
})

class JournalEntry extends Model {} // we have a base class called Model and we want to inherit that for User 

// entries = subclass to model
JournalEntry.init({
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    entry: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
    },
    image: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    // userId: {
    //     type: DataTypes.INTEGER,
    //     allowNull: false,
    // }
}, {
    sequelize,
    modelName: "JournalEntry",
})

User.hasMany(JournalEntry, { onDelete: 'cascade' })
JournalEntry.belongsTo(User)


sequelize.sync({force: true}) 

module.exports = { sequelize, User, JournalEntry };