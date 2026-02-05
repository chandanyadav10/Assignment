export const getDistance = (req, res) => {
  const { latitude: userLat, longitude: userLng } = req.user;

  const destLat = Number(req.query.dest_lat);
  const destLng = Number(req.query.dest_lng);

  if (isNaN(destLat) || isNaN(destLng)) {
    return res.status(400).json({ message: "Invalid destination coordinates" });
  }

  const toRad = v => (v * Math.PI) / 180;
  const R = 6371; // Earth radius in KM

  const dLat = toRad(destLat - userLat);
  const dLng = toRad(destLng - userLng);

  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(userLat)) *
      Math.cos(toRad(destLat)) *
      Math.sin(dLng / 2) ** 2;

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = (R * c).toFixed(2);

  res.json({
    status_code: 200,
    message: "Distance calculated",
    distance: `${distance}km`
  });
};
