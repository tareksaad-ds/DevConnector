const jwt = require("jsonwebtoken");
const config = require("config");

module.exports = function (req, res, next) {
  // GET TOKEN FROM HEADERS

  const token = req.header("x-auth-token");

  // CHECK IF NOT TOKEN

  if (!token) {
    return res.status(401).json({ msg: "No Token , Auth Failed" });
  }

  // VERIFY TOKEN
  try {
    const decoded = jwt.verify(token, config.get("jwtSecret"));

    req.user = decoded.user;

    next();
  } catch (err) {
    res.status(401).json({ msg: "Token is not valid" });
  }
};
