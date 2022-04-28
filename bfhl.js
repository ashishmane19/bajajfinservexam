
const { request, response } = require("express");
const express = require("express");
const router = express.Router();




router.post("/", (request, response) => {
  const data = request.body.data;
  var numbers=[];
  var alphabets=[];

  for(var i=0;i<data.length;i++)
  {      
    console.log(data[i]);
    if(data[i]>='A' && data[i]<='Z')
    {
        alphabets.push(data[i]);        
    }
    else
    {
        //console.log(data[i]);
        numbers.push(data[i]);
    }
  }

  const resp={
      "is_success": true,
      "user_id": "john_doe_17091999",
      "email" : "john@xyz.com",
      "roll_number":"ABCD123",
      "numbers": numbers,
      "alphabets": alphabets
    }


  response.send(resp);

});

//Export Router Module
module.exports = router;
