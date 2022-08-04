import express from "express";
import {
  getUserById,
  updateUserById,
  deleteUserById,
  followUserById,
  unFollowUserById,
} from "../Controllers/UserController.js";

const router = express.Router();

//get user by id
router.get("/:id", getUserById);
//update user by id
router.put("/:id", updateUserById);
//delete user by id
router.delete("/:id", deleteUserById);
//follow user by id
router.put("/:id/follow", followUserById);
//unFollow user by id
router.put("/:id/unfollow", unFollowUserById);

export default router;
