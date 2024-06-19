import { Router } from "express";
import { verifyToken, jwt, secretKey } from "../utility/verifyJwt";
import { getMessage } from "../utility/message";
import { Passwd } from "../model/user.model";

const routerLogin = Router();
routerLogin.post("/login", (req, res) => {
  const { username, password } = req.body;
  Passwd.findOne({
    where: {
      user: username,
      passwd: password,
    },
  }).then((result: any) => {
    if (!result) {
      res.status(403).json(getMessage(false, 403, "Usuario no autorizado"));
    } else {
      const token = jwt.sign({ username }, secretKey, { expiresIn: "10m" });
      res.status(200).json(getMessage(true, 200, { token, result }));
    }
  });
});

routerLogin.post("/validToken", verifyToken, (req, res) => {
  return res.status(200).json({ message: "You have access" });
});

export { routerLogin };
