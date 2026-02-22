import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { CommentServices } from "./comment.services";

/**
 * Create new comment
 */
const createComment = catchAsync(async (req, res) => {
  const result = await CommentServices.createComment(req.body);

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Comment created successfully",
    data: result,
  });
});

/**
 * Get comments for project + page
 */
const getCommentsByProject = catchAsync(async (req, res) => {
  const { projectId } = req.params;
  const { pageUrl } = req.query;

  const result = await CommentServices.getCommentsByProject(
    projectId,
    pageUrl as string
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Comments fetched successfully",
    data: result,
  });
});

/**
 * Add reply
 */
const addReply = catchAsync(async (req, res) => {
  const { commentId } = req.params;
  const { userName, text } = req.body;

  const result = await CommentServices.addReply(
    commentId,
    userName,
    text
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Reply added successfully",
    data: result,
  });
});

/**
 * Update status
 */
const updateStatus = catchAsync(async (req, res) => {
  const { commentId } = req.params;
  const { status } = req.body;

  const result = await CommentServices.updateStatus(
    commentId,
    status
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Comment status updated",
    data: result,
  });
});

/**
 * Delete comment
 */
const deleteComment = catchAsync(async (req, res) => {
  const { commentId } = req.params;

  const result = await CommentServices.deleteComment(commentId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Comment deleted",
    data: result,
  });
});

export const CommentControllers = {
  createComment,
  getCommentsByProject,
  addReply,
  updateStatus,
  deleteComment,
};