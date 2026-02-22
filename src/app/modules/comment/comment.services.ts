import httpStatus from "http-status";
import AppError from "../../errors/AppError";
import Comment from "./comment.model";
import { TComment } from "./comment.interface";

/**
 * Create new comment thread
 */
const createComment = async (payload: TComment) => {
  const result = await Comment.create(payload);
  return result;
};

/**
 * Get comments by project + page
 */
const getCommentsByProject = async (
  projectId: string,
  pageUrl: string
) => {
  const result = await Comment.find({
    projectId,
    pageUrl,
  });

  return result;
};

/**
 * Add reply to existing thread
 */
const addReply = async (
  commentId: string,
  userName: string,
  text: string
) => {
  const comment = await Comment.findById(commentId);
  if (!comment) {
    throw new AppError(httpStatus.NOT_FOUND, "Comment not found");
  }

  comment.messages.push({
    userName,
    text,
    createdAt: new Date(),
  });

  await comment.save();

  return comment;
};

/**
 * Update comment status
 */
const updateStatus = async (
  commentId: string,
  status: "open" | "resolved"
) => {
  const comment = await Comment.findById(commentId);
  if (!comment) {
    throw new AppError(httpStatus.NOT_FOUND, "Comment not found");
  }

  comment.status = status;
  await comment.save();

  return comment;
};

/**
 * Delete comment thread
 */
const deleteComment = async (commentId: string) => {
  const result = await Comment.findByIdAndDelete(commentId);
  if (!result) {
    throw new AppError(httpStatus.NOT_FOUND, "Comment not found");
  }

  return result;
};

export const CommentServices = {
  createComment,
  getCommentsByProject,
  addReply,
  updateStatus,
  deleteComment,
};