const router = require('express').Router();
const userController = require('../controllers/userController');
const passport = require('passport');

router.post('/', userController.createUser);

router.get('/', userController.getAll);

router.get('/login', passport.authenticate('github'), () => {
  // #swagger.ignore = true
});

router.get('/logout', (req, res, next) => {
  // #swagger.ignore = true
  req.logout((err) => {
    return next(err);
  });
  res.redirect('/');
});

module.exports = router;
