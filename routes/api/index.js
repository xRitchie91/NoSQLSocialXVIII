// with friends like these who needs dependencies? you, thats who.
const router = require('express').Router();
const thoughtRts = require('./thought-routes');
const userRts = require('./user-routes');

router.use('/thoughts', thoughtRts);
router.use('/users', userRts);

module.exports = router;