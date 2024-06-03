import { BaseError } from "../../config/error.js"
import { status } from "../../config/response.status.js"
import { getMissionDTO, getMissionFromUserDTO } from "../dtos/mission.dto.js"
import {
  getMissionDao,
  missionExists,
  missionIsChallanging,
  postMissionDao,
  postMissionToUserDao,
} from "../models/mission.dao.js"
import { restaurantExists } from "../models/restaurant.dao.js"

export const postMissionService = async (body) => {
  if ((await restaurantExists(body.restaurant_id)) == 0)
    throw new BaseError(status.DATA_NOT_EXIST)
  else {
    const missionId = await postMissionDao({
      price: body.price,
      point: body.point,
      due_date: body.due_date,
      restaurant_id: body.restaurant_id,
    })

    return getMissionDTO(await getMissionDao(missionId))
  }
}

export const postMissionToUserService = async (body) => {
  if ((await missionExists(body.mission_id)) == 0) {
    throw new BaseError(status.MISSION_NOT_EXIST)
  } else {
    if (
      (await missionIsChallanging({
        member_id: body.member_id,
        mission_id: body.mission_id,
      })) == 1
    ) {
      throw new BaseError(status.MISSION_ALREADY_CHALLENGING)
    }

    await postMissionToUserDao({
      member_id: body.member_id,
      mission_id: body.mission_id,
    })
    return getMissionFromUserDTO(await getMissionDao(body.mission_id))
  }
}
