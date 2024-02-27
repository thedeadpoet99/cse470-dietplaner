const express = require("express");
const router = express.Router();
const userProfileController = require("../controller/userProfileController");

router.get('/profile/:username', userProfileController.getUserProfile);

module.exports = router;

// const express = require("express");
// const router = express.Router();
// const User = require("../models/user");

// const path = require('path');
// const fs = require('fs');
// router.get('/profile/:username', async (req, res) => {
//     const { username } = req.params;
//     try {
//         const user = await User.findOne({ username });
//         if (!user) {
//             return res.status(404).json({ error: 'User not found' });
//         }
//         // Exclude sensitive data like password before sending the response
//         const userProfile = {
//             name: user.name,
//             username: user.username,
//             email: user.email,
//             dob: user.dob,
//             height: user.height,
//             weight: user.weight
//         };
//         res.json(userProfile);
//     } catch (error) {
//         console.error('Error fetching user profile:', error);
//         res.status(500).json({ error: 'Internal server error' });
//     }
// });



// module.exports = router;