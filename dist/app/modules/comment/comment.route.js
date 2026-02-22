"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentRoutes = void 0;
const express_1 = __importDefault(require("express"));
const comment_controller_1 = require("./comment.controller");
const router = express_1.default.Router();
router.post("/add", comment_controller_1.CommentControllers.createComment);
router.get("/", comment_controller_1.CommentControllers.getComments);
router.post("/:commentId/reply", comment_controller_1.CommentControllers.addReply);
router.patch("/:commentId/status", comment_controller_1.CommentControllers.updateStatus);
router.delete("/:commentId", comment_controller_1.CommentControllers.deleteComment);
exports.CommentRoutes = router;
