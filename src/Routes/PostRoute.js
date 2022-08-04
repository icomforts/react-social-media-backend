import express from "express";
import {
  createPost,
  getPostById,
  updatePostById,
  deletePostById,
  likePostById,
  getTimelinePosts,
} from "../Controllers/PostController.js";

const router = express.Router();
//create new post
router.post("/", createPost);
//get post by id
router.get("/:id", getPostById);
//update post by id
router.put("/:id", updatePostById);
//delete post by id
router.delete("/:id", deletePostById);
//like/dislike post by id
router.put("/:id/like", likePostById);
//get timeline posts
router.get("/:id/timeline", getTimelinePosts);

export default router;
