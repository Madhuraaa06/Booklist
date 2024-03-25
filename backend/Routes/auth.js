const express = require('express');
const router = express.Router();
const User = require("../models/User")
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
// var fetchuser = require("../middleware/fetchuser");

const jwt_secret = "thisismyc0d#"



// adding validations
router.post('/', [
    body('name', 'Please fill this field').notEmpty(),
    body('name', 'Minimum length must be 3').isLength({ min: 3 }),
    body('email', 'enter a valid email').isEmail(),
    body('password', 'five characters needed').isLength({ min: 5 }),
  ], async (req, res) => {
   let success = false;


  
   // const  user = User(req.body);
   // user.save()

   //displaying the errors using following function 
   const errors = validationResult (req);
   if(!errors.isEmpty()){
    return res.status(400).json({errors: errors.array()})
   }
   

   try {
      let user = await User.findOne({email: req.body.email});
   if(user){
      success=false;
      return res.status(400).json("sorry user already exists!")
   }

   //salt : the protection string added to your info so that it cant be hacked
   //created using bcrypt module
   const salt = await bcrypt.genSalt(10);
   const securep = await bcrypt.hash(req.body.password,salt);


   user =await User.create({
      name: req.body.name,
      email: req.body.email,
      password: securep
   })


   //jwt token Google info
   const data ={
      user:{
        id:  user.id
      }
   }
   const jwtdata = jwt.sign(data, jwt_secret);
   console.log(jwtdata);
   success=true;
   res.json({success, user})
   

      
   } catch (error) {
      console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
      
   }
})



//creating a login endpoint(copying from above mostly)
router.post('/login',[
body('email','enter a email').isEmail(),
body('password','five characters needed').isLength({min:5})],
async(req,res)=>{

   const jwt_secret = "thisismyc0d#"

   const errors = validationResult (req);
   if(!errors.isEmpty()){
    return res.status(400).json({errors: errors.array()})
   }

   const{ email, password} = req.body;

try {
   //using for email
   let user = await User.findOne({email});
   if(!user){
      success = false
      return res.status(400).json("Invalid.Enter valid credentials!")
   }
   //using the compare method for password
   const  passwordcheck =await  bcrypt.compare(password, user.password)
   if(!passwordcheck){
      success = false
      return res.status(400).json("Invalid.Enter valid credentials!")
   }
   const data ={
      user:{
        id:  user.id
      }
   }
   const jwtdata = jwt.sign(data, jwt_secret);
   success = true;
   res.json({success, jwtdata})
   console.log(jwtdata);
   

}

   catch (error) {
      console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
      
   }


})

// //creating a fetchuser endpoint(copying from above mostly)
// router.post('/fetchuserdata', fetchuser, async(req,res)=>{

// try
// {
//    userId = req.user.id;
//    const user = await User.findById(userId).select("-password")//- for except the password
//    res.send(user)
// } 

// catch (error) 
// {
//    console.error(error);
//      res.status(500).json({ message: "Internal Server Error" });
   
// }

//    })
module.exports = router;