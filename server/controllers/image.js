// const Image = require("../models/Image");
// const { PrismaClient } = require("@prisma/client");
// require("dotenv").config();
const AWS = require("aws-sdk");

const s3 = new AWS.S3({
  accessKeyId: "AKIA3UEWBFEIISLOPCDN",
  secretAccessKey: "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",
});

// No controlador
const uploadImage = (req, res) => {
  const arquivo = req.file;
  
  if (!arquivo) {
    res.status(400).send('Nenhum arquivo enviado');
    return;
  }

  // Configurações do objeto para o S3
  const params = {
    Bucket: 'seu-bucket',
    Key: arquivo.originalname,
    Body: arquivo.buffer // Verifique se o buffer está acessível aqui
  };

  // Enviar o arquivo para o S3
  s3.upload(params, (err, data) => {
    if (err) {
      console.error('Erro ao fazer upload:', err);
      res.status(500).send('Erro ao fazer upload');
      return;
    }

    console.log('Upload bem-sucedido. URL da imagem:', data.Location);
    res.send('Upload bem-sucedido. URL da imagem: ' + data.Location);
  });
};


module.exports = {
  uploadImage,
};
