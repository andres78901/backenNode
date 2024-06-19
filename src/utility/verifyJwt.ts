import jwt from "jsonwebtoken";
const secretKey = "secret";
const verifyToken = (req: any, res: any, next: any) => {
  const header = req.header("Authorization") || "";
  const token = header.split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: "Token not provied" });
  }
  try {
    const payload = jwt.verify(token, secretKey);
    console.log("linea 56", payload);

    next();
  } catch (error) {
    return res.status(403).json({ message: "Token not valid final" });
  }
};

export { verifyToken, jwt, secretKey };
