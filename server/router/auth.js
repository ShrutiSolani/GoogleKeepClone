const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send("Hello in router");
});

router.post('/register', (req, res) => {
  const {email, password} = req.body;
  if(!email || !password){
    return res.status(422).json({error: "Please fill all fields"});
  }

  User.findOne({email: email})
  .then((userExists) => {
    if(userExists){
      return res.status(422).json({error: "Email already exists"});
    }

    const user = new User({email, password});
    user.save().then(() => {
      res.status(201).json({message: "Registered successfully"});
    }).catch((err) => res.status(500).json({error: "Registration failed"}));
  }).catch(err => {console.log("Error");})
})

module.exports = router;
