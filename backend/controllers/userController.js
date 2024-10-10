const User = require('../models/userModel');
const bcrypt = require('bcrypt');


const userRegisterController = async (req,res)=>{
    try {
        console.log('Received Body:', req.body); // Debugging line
        const{email, password, name, img} = req.body;

        //ensureing all the fields are present

        if(!email||!password||!name){
            return res.status(409).json({message: 'All Data Fields Required'})
        }

        const findExistingUser = await User.findOne({email});
        if(findExistingUser){
            return res.status(409).json({mesage:'Email is already in use'})
        }

        const hashPass = await bcrypt.hash(password,10);
        // const salt = bcrypt.genSaltSync(10);
        // const hashedPassword = bcrypt.hashSync(password, salt);

        //Create new user
        const createUser = await User.create({
            name,
            email,
            password: hashPass,
            // password: hashedPassword,
            img,
        })

        if (createUser){
            return res.status(201).json({message:'User Created Successfully!'})
        }
        else{
            return res.status(500).json({message:'Error while creating user!'})
        }



    } catch (error) {
        console.log('Error While Registering', error)
    }
}

module.exports = userRegisterController