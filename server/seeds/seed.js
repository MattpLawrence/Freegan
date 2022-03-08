const db = require('../config/connection');
const {Category, Item, Profile, User} = require('../models');
const userData = require('./userData.json');
const itemData = require('./itemData.json');
const profileData = require('./profileData.json');
const categoryData = require('./categoryData.json');

db.once ('open', async ()=>{
    try{
        //Clear the database
        await Category.deleteMany({});
        await Item.deleteMany({});
        await Profile.deleteMany({});
        await User.deleteMany({});
        //insert data into the database for each model 
        //const categories = await Category.insertMany(categoryData);
        //const items = await Item.insertMany(itemData);
        //const profiles = await Profile.insertMany(profileData); 
        //const users = await User.insertMany(userData); 
    } catch (err){
        console.log(err);
        process.exit(1)
    }
    console.log('Data inserted!')
    process.exit(0);
});
