//imports
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const { readdirSync } = require("fs");
const app = express();
const dotenv = require("dotenv");
dotenv.config();

//middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

//routes
readdirSync("./routes/").map((r) => app.use("/", require("./routes/" + r)));

//database
mongoose
  .connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("database connected successfully");
  })
  .catch((err) => {
    console.log("error connecting to mongodb", err);
  });

//running server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log("Server is running on port 8000");
});

//---------------------------------------

const AWS = require("aws-sdk");

const s3 = new AWS.S3({
  accessKeyId: "AKIA3UEWBFEIISLOPCDN",
  secretAccessKey: "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",
});


const params = {
  Bucket: 'cartplaces',
  Key: 'camiseta.jpg',
  Body: './uploads/1.jpg' // Pode ser um buffer, stream ou objeto de arquivo local
};

s3.upload(params, (err, data) => {
  if (err) {
    console.error('Erro ao fazer upload:', err);
    return;
  }
  console.log('Upload bem-sucedido. URL da imagem:', data.Location);
});
