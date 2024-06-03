export const postMissionSql =
  "INSERT INTO mission (price, point, due_date, restaurant_id) VALUES (?,?,?,?);"

export const getMissionSql =
  "SELECT id, price, point, due_date, restaurant_id " +
  "FROM mission " +
  "WHERE id = ?;"

export const missionExistsSql =
  "SELECT EXISTS (SELECT * FROM mission WHERE id = ? AND due_date > CURRENT_TIMESTAMP) as missionExists;"

export const postMissionToUserSql =
  "INSERT INTO my_mission (status, member_id, mission_id) VALUES (1,?,?);"

export const missionIsChallengingSql =
  "SELECT EXISTS (SELECT * FROM my_mission WHERE member_id = ? AND mission_id = ?) as missionExists;"
