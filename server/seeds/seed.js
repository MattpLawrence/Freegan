const db = require('../config/connection');
const {Item, Profile, User} = require('../models');
const itemData = require('./itemData.json');
const profileData = require('./profileData.json');
const userData = require('./userData.json');

db.once ('open', async ()=>{
    //insert data into the database for each model 
    const items = await Item.insertMany(itemData);
    const profiles = await Profile.insertMany(profileData); 
    const users = await User.insertMany(userData); 

    console.log('Data inserted!')
    process.exit(0);
});
