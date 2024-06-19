import { Router } from "express";
import { Products } from "../model/product.model";
import { faker } from "@faker-js/faker";
import { getMessage } from "../utility/message";
import { verifyToken } from "../utility/verifyJwt";
const router = Router();

router.get("/getProducts", verifyToken, (req, res) => {
  Products.findAll()
    .then((result) => {
      res.status(200).json(getMessage(true, 200, result));
    })
    .catch((error) => {
      res.status(500).json(getMessage(false, 500, error));
    });
});

router.get("/getProduct/:product_id", verifyToken, (req, res) => {
  const id = req.params.product_id;
  Products.findOne({
    where: {
      product_id: id,
    },
  }).then((result) => {
    res.status(200).json(getMessage(true, 200, result));
  });
});

router.put("/updateProduct/:product_id", verifyToken, (req, res) => {
  const data = req.body;
  const id = req.params.product_id;
  Products.update(
    {
      product_name: data.product_name,
      price: data.price,
      is_stock: data.is_stock,
    },
    {
      where: {
        product_id: id,
      },
    }
  ).then((result) => {
    res.status(200).json(getMessage(true, 200, result));
  });
});

router.delete("/deleteProduct/:product_id", verifyToken, (req, res) => {
  const id = req.params.product_id;
  Products.destroy({
    where: {
      product_id: id,
    },
  }).then((result) => {
    res.status(200).json(getMessage(true, 200, result));
  });
});

router.post("/createProduct", verifyToken, (req, res) => {
  Products.sync().then(() => {
    const data = req.body;
    Products.create({
      product_name: data.product_name,
      price: data.price,
      is_stock: data.is_stock,
    })
      .then((result) => {
        res.status(200).json(getMessage(true, 200, result));
      })
      .catch((error) => {
        res.status(500).json(getMessage(false, 500, error));
      });
  });
});

export default router;
