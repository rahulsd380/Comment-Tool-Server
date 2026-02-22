import express from "express";
import { CommentControllers } from "./comment.controller";

const router = express.Router();

router.post("/add", CommentControllers.createComment);

router.get("/", CommentControllers.getComments);

router.post("/:commentId/reply", CommentControllers.addReply);

router.patch("/:commentId/status", CommentControllers.updateStatus);

router.delete("/:commentId", CommentControllers.deleteComment);

export const CommentRoutes = router;