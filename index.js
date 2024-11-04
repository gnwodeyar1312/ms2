const express = require("express");
const { fileRouter } = require("./src/router/fileRouter.js");
const { fileURLToPath } = require("url");
const path =  require("path");
const fs = require("fs");

const app = express();
const PORT = process.env.PORT || 4040;

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

const uploadDir = path.join(__dirname, "uploads");
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

app.use("/src/uploads", express.static("src/uploads"));

app.use("/files", fileRouter);

app.use("/", (req, res) => {
  res.send("Welcome to file/image upload");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
