import { Router } from "express";
import { Passwd, Users } from "../model/user.model";
import { getMessage } from "../utility/message";
const dataUser = Router();

dataUser.post("/createUser", (req, res) => {
  Users.sync().then((result) => {
    const request = req.body;
    Users.create({
      user_name: request.name,
      user_last_name: request.lastName,
      user_number_id: request.numberId,
    })
      .then((resultUser: any) => {
        res.status(200).json(getMessage(true, 200, resultUser));
      })
      .catch((error) => {
        res.status(500).json(getMessage(false, 500, error));
      });
  });
});

dataUser.post("/createPasswd", (req, res) => {
  Passwd.sync().then(() => {
    const data = req.body;
    Passwd.create({
      user_id: data.id,
      passwd: data.passwd,
      user: data.user,
    }).then((passwdCreate) => {
      res.status(200).json(getMessage(true, 200, passwdCreate));
    });
  });
});

export { dataUser };
