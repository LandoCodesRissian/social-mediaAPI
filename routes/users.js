const express = require('express');
const router = express.Router();
const {
getAllUsers,
getUserById,
createUser,
updateUser,
deleteUser,
addFriend,
removeFriend,
} = require('../controllers/users');

// Define routes for User model
router.get('/', getAllUsers);
router.get('/:id', getUserById);
router.post('/', createUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);
router.post('/:userId/friends/:friendId', addFriend);
router.delete('/:userId/friends/:friendId', removeFriend);

// exporting user routes
module.exports = router;
