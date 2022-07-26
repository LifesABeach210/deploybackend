var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
 res.send('Hello')
});


router.post( "/post-message",function(req,res,next){
  try{
    const dateTime = new Date().toString()
    const clientMessage = req.body;
    res.status(200).json({success:`Received client message: ${clientMessage}. Responded at ${dateTime.toString()}`})

  }catch(e){res.status(500).json({success:false,message:"Error"})}
})
module.exports = router;
