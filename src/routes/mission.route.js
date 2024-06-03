import express from "express"
import asyncHandler from "express-async-handler"
import { postMission } from "../controllers/mission.controller.js"

export const missionRouter = express.Router()

missionRouter.post("/", asyncHandler(postMission))
