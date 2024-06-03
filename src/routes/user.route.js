import express from "express"
import asyncHandler from "express-async-handler"
import { userSignin } from "../controllers/user.controller.js"
import { postMissionToUser } from "../controllers/mission.controller.js"

export const userRouter = express.Router()

userRouter.post("/signin", asyncHandler(userSignin))
userRouter.post("/missions", asyncHandler(postMissionToUser))
