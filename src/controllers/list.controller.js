import User from "../models/User.js";

export const getUsersByDay = async (req, res) => {
  if (!req.query.week_number) {
    return res.status(400).json({ message: "week_number required" });
  }

  const days = req.query.week_number.split(",").map(Number);

  const users = await User.find(
    { registered_day: { $in: days } },
    { name: 1, email: 1, registered_day: 1, _id: 0 }
  );

  const dayMap = {
    0: "sunday",
    1: "monday",
    2: "tuesday",
    3: "wednesday",
    4: "thursday",
    5: "friday",
    6: "saturday"
  };

  const result = {};
  days.forEach(d => (result[dayMap[d]] = []));

  users.forEach(user => {
    result[dayMap[user.registered_day]].push({
      name: user.name,
      email: user.email
    });
  });

  res.json({
    status_code: 200,
    message: "Users fetched successfully",
    data: result
  });
};
