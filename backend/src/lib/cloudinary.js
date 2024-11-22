import { v2 as cloudinary } from "cloudinary";
import { config } from "dotenv";

// GIVE ACCESS TO THE environment variable
config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Debug to verify configuration
// console.log("Cloudinary Configured:", {
//   cloudName: cloudinary.config().cloud_name,
//   apiKey: cloudinary.config().api_key ? "Configured" : "Not Configured",
//   apiSecret: cloudinary.config().api_secret ? "Configured" : "Not Configured",
// });

export default cloudinary;
