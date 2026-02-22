"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const comment_route_1 = require("../modules/comment/comment.route");
const router = (0, express_1.Router)();
const moduleRoutes = [
    {
        path: "/comments",
        route: comment_route_1.CommentRoutes,
    },
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));
exports.default = router;
