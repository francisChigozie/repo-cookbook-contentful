const { response } = require('express')
const express = require('express')
const router = express.Router()
const User = require('../models/user')


/*router.post('/signup', async(request, response) =>{
    try{
        const signUpUser = await new signupTemplateCopy({
          firstName:request.body.firstName,
          lastName:request.body.firstName,
          email:request.body.email,
          occupation:request.body.occupation,
          city:request.body.city,
          paasword:request.body.paasword
    })
     response.json(data)
    signUpUser.save()

    }
    catch(err){console.error(err.message)}
})*/

router.post('/signup', (request, response) =>{
    console.log(request.body)
        const signUpUser = new User(request.body
          
    )
    signUpUser.save()
      .then(data =>{
           response.json(data)
      })
  
      .catch(error =>{response.json(error)})
})

module.exports = router;