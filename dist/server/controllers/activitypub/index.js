"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const client_1 = require("./client");
const inbox_1 = require("./inbox");
const outbox_1 = require("./outbox");
const activityPubRouter = express.Router();
exports.activityPubRouter = activityPubRouter;
activityPubRouter.use('/', inbox_1.inboxRouter);
activityPubRouter.use('/', outbox_1.outboxRouter);
activityPubRouter.use('/', client_1.activityPubClientRouter);
//# sourceMappingURL=index.js.map