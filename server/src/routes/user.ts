import express, { NextFunction } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
const router = express.Router();
const userController = require("../controllers/user");

import { IUser, UserModel } from "../models/user";
import { UserErrors } from "../common/errors";

router.post("/register", userController.register);

router.post("/login", userController.login);

router.get("/getAll", userController.getAllUsers);

export const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    jwt.verify(authHeader, "secret", (err) => {
      if (err) {
        return res.sendStatus(403);
      }
      next();
    });
  } else {
    res.sendStatus(401);
  }
};

export { router as userRouter };
