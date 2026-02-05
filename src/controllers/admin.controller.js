import User from "../models/User.js";

export const toggleAllUsersStatus = async (req, res) => {
  await User.updateMany(
    {},
    [{ $set: { status: { $not: "$status" } } }],
    { updatePipeline: true }
  );

  res.json({
    status_code: 200,
    message: "All users status updated"
  });
};
