const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/',(req, res, next) => {
  var msg = '何か書いて';
  if (req.session.message !=undefined){
    msg = "last Message" + req.session.message;
  }
  var data = {
    title:'hello!!',
    content: msg
  };
  res.render('hello', data);
});

router.get('/2',(req, res, next) => {
  var data = {
    title:'hello2',
  };
  res.render('hello2', data);
});

router.post('/post',(req,res,next) => {
  var msg =req.body['message'];
  req.session.message = msg;
  var data = {
    title: 'hello',
    content: 'あなたは'+ msg + '送りました' + req.session.message
  };
  res.render('hello',data);
  
})
module.exports = router;