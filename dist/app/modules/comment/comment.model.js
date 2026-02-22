"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const MessageSchema = new mongoose_1.Schema({
    userName: { type: String, required: true },
    text: { type: String, required: true },
}, { timestamps: true });
const CommentSchema = new mongoose_1.Schema({
    projectId: { type: String, required: true, index: true },
    pageUrl: { type: String, required: true },
    selector: { type: String },
    position: {
        x: { type: Number, required: true },
        y: { type: Number, required: true },
    },
    messages: [MessageSchema],
    status: {
        type: String,
        enum: ["open", "resolved"],
        default: "open",
    },
}, { timestamps: true });
const Comment = (0, mongoose_1.model)("Comment", CommentSchema);
exports.default = Comment;
