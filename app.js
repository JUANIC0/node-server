
const express = require('express');
const app = express();

// Middleware para permitir solo métodos HTTP válidos
function allowValidMethods(req, res, next) {
  const validMethods = ["GET", "POST", "PUT", "DELETE"];
  if (!validMethods.includes(req.method)) {
    return res.status(400).json({ message: "Método HTTP no válido" });
  }
  next();
}

app.use(allowValidMethods);


