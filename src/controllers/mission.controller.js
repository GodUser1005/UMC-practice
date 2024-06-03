import { response } from "../../config/response.js"
import { status } from "../../config/response.status.js"
import {
  postMissionService,
  postMissionToUserService,
} from "../services/mission.service.js"

// 가게 에서 미션생성
export const postMission = async (req, res, next) => {
  console.log("미션을 생성 합니다")
  console.log(req.body)
  return res.send(response(status.SUCCESS, await postMissionService(req.body)))
}

// user가 미션 도전
export const postMissionToUser = async (req, res, next) => {
  console.log("미션 도전!")
  console.log(req.body)
  return res.send(
    response(status.SUCCESS, await postMissionToUserService(req.body)),
  )
}
