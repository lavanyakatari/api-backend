import User from "../models/User.js";

// GET /api/users

export const getUsers = async (req,res) => {
    try {
        const users = await User.find();
        res.send(users);
    } catch (err) {
        res.status(500).json({error : 'Server error'})
    }
}

// POST /api/users

export const createUser = async (req,res) => {
    try {
        const {name,email} = req.body;
        const newUser = new User({name,email});
        await newUser.save();
        res.status(201).json({message:'user created' , user:newUser})
    } catch (err) {
        res.status(500).json({message:'internal server'})
    }

}



