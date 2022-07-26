var express = require('express');
var router = express.Router();

const userList = [{
  id: 1,
  firstName: "HJ",
  lastName: "Yu",
  email: "hjy@gmail.com"
}];

/* GET home page. */
router.get('/', function(req, res, next) {
 res.send('Hello')
});


router.post( "/post-message",function(req,res,next){
  try{
    const dateTime = new Date().toString()
    const clientMessage = req.body.clientMessage;
   
    res.status(200).json({success:`Received client message: ${clientMessage}. Responded at ${dateTime.toString()}`})

  }catch(e){res.status(500).json({success:false,message:"Error"})}
})

router.get('/get-users',function(req, res, next){
  try{
    res.json({message:userList}).status(200)
    
  }catch(e){
    console.log(e)
    res.status(500).send('error fetching data ' + e)
  }
})
module.exports = router;
