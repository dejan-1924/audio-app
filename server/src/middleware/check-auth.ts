const jwt = require("jsonwebtoken");
const HttpErr = require("../models/http-error");

const authCheck = (req, res, next) => {
  if (req.method === "OPTIONS") {
    return next();
  }
  try {
    const token = req.headers.authorization.split(" ")[1]; // Authorization: 'Bearer TOKEN'
    if (!token) {
      throw new Error("Authentication failed!");
    }
    const decodedToken = jwt.verify(token, "secret");
    req.userData = { userId: decodedToken.id };
    next();
  } catch (err) {
    const error = new HttpErr("Authentication failed!", 403);
    return next(error);
  }
};

const adminCheck = (req, res, next) => {
  if (req.method === "OPTIONS") {
    return next();
  }
  try {
    const token = req.headers.authorization.split(" ")[1]; // Authorization: 'Bearer TOKEN'
    console.log(token);
    if (!token) {
      throw new Error("Authentication failed!");
    }
    const decodedToken = jwt.verify(token, "secret");
    if (decodedToken.role === "ADMIN") {
      req.userData = { userId: decodedToken.userId };
      next();
    } else {
      throw new Error("You are not an admin!");
    }
  } catch (err) {
    const error = new HttpErr("Authentication failed!", 403);
    return next(error);
  }
};

exports.authCheck = authCheck;
exports.adminCheck = adminCheck;
