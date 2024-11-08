const { cloudinaryUpload } = require("../service/fileService.js");

const fileController = async (req, res) => {
  try {
    if (!req.files) {
      return res
        .status(400)
        .json({ error: { description: "File not present in the request" } });
    }

    if (Array.isArray(req.files) && req.files.length === 0) {
      return res
        .status(400)
        .json({ error: { description: "No file Uploaded " } });
    }
    const file = req.files[0];
    const response = await cloudinaryUpload(file);
    res
      .status(200)
      .json({ message: " File uploaded sucessfully", uploadResult: response });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
  res.status(200).json({ message: "File Uploaded successfully" });
};

module.exports = fileController;
