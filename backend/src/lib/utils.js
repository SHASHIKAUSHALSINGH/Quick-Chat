import jwt from "jsonwebtoken";

export const generateToken = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "7d", 
  });
  // third thing is object
// ham token ko cookies ke form me return kara rahe hai
  res.cookie("jwt", token, {
    maxAge: 7 * 24 * 60 * 60 * 1000// MS
  });
console.log(token);
  return token;
};
