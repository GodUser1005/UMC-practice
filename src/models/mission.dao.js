import { pool } from "../../config/db.config.js"
import { BaseError } from "../../config/error.js"
import { status } from "../../config/response.status.js"
import {
  getMissionSql,
  missionExistsSql,
  postMissionSql,
  postMissionToUserSql,
} from "./mission.sql.js"

export const postMissionDao = async (mission_data) => {
  try {
    const conn = await pool.getConnection()
    const result = await conn.query(postMissionSql, [
      mission_data.price,
      mission_data.point,
      mission_data.due_date,
      mission_data.restaurant_id,
    ])
    conn.release()
    return result[0].insertId
  } catch (err) {
    throw new BaseError(status.PARAMETER_IS_WRONG)
  }
}

export const getMissionDao = async (mission_id) => {
  try {
    const conn = await pool.getConnection()
    const [result] = await conn.query(getMissionSql, mission_id)

    conn.release()
    return result[0]
  } catch (err) {
    throw new BaseError(status.PARAMETER_IS_WRONG)
  }
}

export const missionExists = async (mission_id) => {
  try {
    const conn = await pool.getConnection()
    const [result] = await conn.query(missionExistsSql, mission_id)

    conn.release()
    return result[0].missionExists
  } catch (err) {
    throw new BaseError(status.PARAMETER_IS_WRONG)
  }
}

export const postMissionToUserDao = async (data) => {
  try {
    const conn = await pool.getConnection()
    await conn.query(postMissionToUserSql, [data.member_id, data.mission_id])
    conn.release()
  } catch (err) {
    throw new BaseError(status.PARAMETER_IS_WRONG)
  }
}
