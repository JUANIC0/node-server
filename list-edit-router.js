
const express = require('express');
const router = express.Router();
const fs = require('fs');

// Middleware para validar solicitudes POST y PUT
function validateTaskRequest(req, res, next) {
  if (req.method === "POST" || req.method === "PUT") {
    if (!req.body || Object.keys(req.body).length === 0) {
      return res.status(400).json({ message: "Cuerpo de solicitud vacío" });
    }
  }
  next();
}

// Ruta para crear una tarea
router.post('/create', validateTaskRequest, (req, res) => {
  // ...
});

// Ruta para actualizar una tarea
router.put('/update/:taskId', validateTaskRequest, (req, res) => {
  // ...
});

module.exports = router;
