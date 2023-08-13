import express from 'express'
import {createUser,updateUser,deleteUser,getAllUser,getSingleUser} from '../controllers/userController.js'
import {verifyAdmin, verifyUser} from '../utils/verifyToken.js'

const router = express.Router()

router.put("/:id",verifyUser ,updateUser);

router.delete("/:id",verifyUser ,deleteUser);

router.get("/:id",verifyUser, getSingleUser);

router.get("/",verifyAdmin ,getAllUser);

export default router;