import { Router } from "express";
import { userDao } from "./user-dao";

export const userRouterFactory = (userDao) => {
  const router = Router();

  router.get("/", (req, res) => {
      userDao.select({})
      .then((users) => res.send(users))
      .catch((err) => res.status(500).send({ detail: err.detail }));
  });

  return router;
};

export const userRouter = userRouterFactory(userDao);
