import express from 'express';
import { getUsers, createUser, updatedUsers, deleteUser } from '../controllers/userController.js';

const router = express.Router();

router.get('/users', getUsers);     
router.post('/users', createUser); 
router.put('/user/:id', updatedUsers);  
router.delete('/user/:id', deleteUser); 

export default router;

