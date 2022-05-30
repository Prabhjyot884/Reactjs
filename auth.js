const { response, request } = require('express');
const express = require('express');
const router = express.Router();

require('../db/conn');
const User = require("../model/userSchema");

router.get('/', (request,response) => {
    response.send('Hello world from the server router js');
});

router.post('/register', async (request,response) => {

    const{ name, email, phone, password, cpassword} = request.body;

    if(!name || !email || !phone || !password || !cpassword) {
        return res.status(422).json({ error: "Please fill all the fields"});
    }

    try{
        const userExist = await ({ email: email })

            if(userExist) {
                return response.status(422).json({ error: "Email already exist"});
            }
    
            const user = new User({ name, email, phone, password, cpassword });
    
            if (userRegister) {
                response.status(201).json({ message: "User registered successfully"});
            } else{
                 response.status(500).json({ error: "Failed registeration"})
            }
        
    }
    catch(err) {
        console.log(err);
    }

  });

  //login route

  router.post('/login', async (request, response) => {
     try{
        const {email , password} = request.body;
        if(!email || !password){
            return response.status(400).json({error: "Please fill the data"})
        }

        const userLogin = await User.findOne({email: email})

        console.log(userLogin);
        if(!userLogin){
            response.status(400).json({ error: "ERROR"});
        } else{
            response.json({message: "User Login successful"});
        }
        

     } catch (err) {
         console.log(err);
     }
  } )


module.exports = router;