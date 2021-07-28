const router = require('express').Router();

// thoughts and reactions
const {
    addThought,
    removeThought,
    addReaction,
 // removeReaction
} = require('../../controllers/thought-controller');

// routes for our young thoughts and reactions
router.route('/:userId').post(addThought)

router
    .route('/:userId/:thoughtId')
    .put(addReaction)
    .delete(removeThought);

router
    .route('/:userId/:thoughtId/:reactionId')
    
module.exports = router;