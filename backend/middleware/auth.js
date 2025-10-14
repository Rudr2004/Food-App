import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const authMiddleware = async (req, res, next) => {
  const { token } = req.headers;
  if (!token) {
    return res.json({ success: false, message: "Not Authorized Login Again" });
  }
  if (!process.env.JWT_SECRET) {
    return res.json({ success: false, message: "Internal Server Error" });
  }
  try {
    const token_decode = jwt.verify(token, process.env.JWT_SECRET);
    req.body.userId = token_decode.id;
    next();
  } catch (error) {
    if (error instanceof jwt.JsonWebTokenError) {
      return res.json({ success: false, message: "Invalid Token" });
    } else if (error instanceof jwt.TokenExpiredError) {
      return res.json({ success: false, message: "Token Expired" });
    } else {
      console.log(error);
      return res.json({ success: false, message: "Error" });
    }
  }
};

export default authMiddleware;
