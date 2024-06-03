export const postMissionSql =
  "INSERT INTO mission (price, point, due_date, restaurant_id) VALUES (?,?,?,?);"

export const getMissionSql =
  "SELECT id, price, point, due_date, restaurant_id " +
  "FROM mission " +
  "WHERE id = ?;"
