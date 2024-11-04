const { uploadToCloudinary } = require("../config/cloudinary.js");
const fs = require("fs");

 const cloudinaryUpload = async (file) => {
  try {
    const cloudinaryResponse = await uploadToCloudinary(file.path);
    fs.unlink(file.path, (err) => {
      if (err) {
        console.error(err);
      }
    });
    return cloudinaryResponse;
  } catch (errror) {
    console.error(error);
  }
};

module.exports = cloudinaryUpload;
