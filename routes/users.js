const express = require('express');
const router = express.Router();

const users = [
  { id: 1, name: 'Alice', email: 'alice@email.com' },
  { id: 2, name: 'Bob', email: 'bob@email.com' },
  { id: 3, name: 'Charlie', email: 'charlie@email.com' },
];

router.get('/', (req, res) => {
  res.render('users', { users });
});

module.exports = router;
