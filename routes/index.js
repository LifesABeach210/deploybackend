var express = require("express");
var router = express.Router();

const userList = [
  {
    id: 1,
    firstName: "John",
    lastName: "Doe",
    email: "jd@gmail.com",
  },
];
=======

const userList = [{
  id: 1,
  firstName: "HJ",
  lastName: "Yu",
  email: "hjy@gmail.com"
}];


/* GET home page. */
router.get("/", function (req, res, next) {
  res.send("Hello");
});

router.post("/post-message", function (req, res, next) {
  try {
    const dateTime = new Date().toString();
    const clientMessage = req.body.clientMessage;


    res
      .status(200)
      .json({
        success: `Received client message: ${clientMessage}. Responded at ${dateTime.toString()}`,
      });
  } catch (e) {
    res.status(500).json({ success: false, message: "Error" });
  }
});

router.get("/get-user", function (req, res, next) {
  try {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;
    const id = userList.length + 1;
    const dateTime = new Date().toString();
    const userList = [
      {
        id: id,
        firstName: firstName,
        lastName: lastName,
        email: email,
      },
    ];

    res
      .status(200)
      .json({
        success: `Recieved client message for ${userList}. Responded at ${dateTime.toString}`,
      });
  } catch (e) {
    res.status(500).json({ success: false, message: `ERROR` });
  }
});

router.post("/create-user"),
  function (req, res, next) {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;
    const id = userList.length + 1;
    const dateTime = new Date().toString();
    try {
      const newUser = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        id: id,
      };

      res
        .send(userList.push(newUser))
        .status(200)
        .json({ success: `${userList}. Has been added on ${dateTime}` });
    } catch (e) {
      res.status(500).json({ success: false, message: `Error` });
    }
  };


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
