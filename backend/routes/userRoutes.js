import express from 'express';
const router = express.Router();
import {
    authUser,
    registerUser,
    getUserByID,
    getUserProfile,
    updateUserProfile,
    updateUser,
    deleteUser,
    getUsers,
    logOutUser,
} from '../controllers/userController.js';
import { protect, admin } from '../middleware/authMiddleware.js';

router.route('/').post(registerUser).get(protect, admin, getUsers);
router.post('/logout', logOutUser);
router.post('/auth', authUser);
router.route('/profile').get(protect, getUserProfile).put(protect, updateUserProfile);
router.route('/:id').delete(protect, admin, deleteUser).get(protect, admin, getUserByID).put(protect, admin, updateUser);

export default router;