"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentServices = void 0;
const http_status_1 = __importDefault(require("http-status"));
const AppError_1 = __importDefault(require("../../errors/AppError"));
const comment_model_1 = __importDefault(require("./comment.model"));
/**
 * Create new comment thread
 */
const createComment = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield comment_model_1.default.create(payload);
    return result;
});
/**
 * Get comments by project + page
 */
const getCommentsByProject = (projectId, pageUrl) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield comment_model_1.default.find({
        projectId,
        pageUrl,
    });
    return result;
});
/**
 * Add reply to existing thread
 */
const addReply = (commentId, userName, text) => __awaiter(void 0, void 0, void 0, function* () {
    const comment = yield comment_model_1.default.findById(commentId);
    if (!comment) {
        throw new AppError_1.default(http_status_1.default.NOT_FOUND, "Comment not found");
    }
    comment.messages.push({
        userName,
        text,
        createdAt: new Date(),
    });
    yield comment.save();
    return comment;
});
/**
 * Update comment status
 */
const updateStatus = (commentId, status) => __awaiter(void 0, void 0, void 0, function* () {
    const comment = yield comment_model_1.default.findById(commentId);
    if (!comment) {
        throw new AppError_1.default(http_status_1.default.NOT_FOUND, "Comment not found");
    }
    comment.status = status;
    yield comment.save();
    return comment;
});
/**
 * Delete comment thread
 */
const deleteComment = (commentId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield comment_model_1.default.findByIdAndDelete(commentId);
    if (!result) {
        throw new AppError_1.default(http_status_1.default.NOT_FOUND, "Comment not found");
    }
    return result;
});
exports.CommentServices = {
    createComment,
    getCommentsByProject,
    addReply,
    updateStatus,
    deleteComment,
};
