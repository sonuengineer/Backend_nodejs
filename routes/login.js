const express = require('express');

const router = express.Router();

router.get('/login', (req, res, next) => {
  res.send(
    `<form action="/login" method="POST" onsubmit="localStorage.setItem('username', document.getElementById('username').value)" >
	    <input type="text" name="username" placeholder="username" id="username">
      <br />
	    <button type="submit">Add</button>
    </form>`
  );
});

router.post('/login', (req, res, next) => {
  console.log(req.body);
  res.redirect('/');
});

module.exports = router;