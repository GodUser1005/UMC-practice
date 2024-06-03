import { response } from "../../config/response.js"
import { status } from "../../config/response.status.js"
import { postMissionService } from "../services/mission.service.js"

export const postMission = async (req, res, next) => {
  console.log("미션을 생성 합니다")
  console.log(req.body)
  return res.send(response(status.SUCCESS, await postMissionService(req.body)))
}
