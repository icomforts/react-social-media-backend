import express from "express";
import {
  getAllUsers,
  getUserById,
  updateUserById,
  deleteUserById,
  followUserById,
  unFollowUserById,
} from "../Controllers/UserController.js";
import authMiddleWare from "../MiddleWare/AuthMiddleWare.js";

const router = express.Router();
//get all users
router.get("/", getAllUsers);
//get user by id
router.get("/:id", getUserById);
//update user by id
router.put("/:id", authMiddleWare, updateUserById);
//delete user by id
router.delete("/:id", authMiddleWare, deleteUserById);
//follow user by id
router.put("/:id/follow", authMiddleWare, followUserById);
//unFollow user by id
router.put("/:id/unfollow", authMiddleWare, unFollowUserById);

export default router;
