
const express = require('express');
const router = express.Router();
const fs = require('fs');

// Middleware para validar parámetros en list-view-router
function validateParameters(req, res, next) {
  // Verifica aquí si los parámetros son correctos
  // Por ejemplo, puedes validar req.params.taskId u otros parámetros según tus necesidades
  if (!req.params.taskId || isNaN(req.params.taskId)) {
    return res.status(400).json({ message: "Parámetros no válidos" });
  }
  next();
}

// Rutas que requieren validación de parámetros
router.get('/complete/:taskId', validateParameters, (req, res) => {
  // ...
});

router.get('/incomplete/:taskId', validateParameters, (req, res) => {
  // ...
});

// Resto del código del archivo
module.exports = router;
