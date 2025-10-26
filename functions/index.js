// functions/index.js

const functions = require("firebase-functions");
const admin = require("firebase-admin");
// ¡Asegúrate de haber instalado cors!
// En tu terminal, dentro de la carpeta 'functions', 
// ejecuta: npm install cors
const cors = require("cors")({ origin: true });

// Inicializa la app de admin para poder acceder a Firestore
admin.initializeApp();

// Esta es tu función principal
exports.enviarMensaje = functions.https.onRequest((request, response) => {
  // Usa 'cors' para permitir que tu sitio web le hable a esta función
  cors(request, response, async () => {

    // Solo permite peticiones POST
    if (request.method !== "POST") {
      return response.status(405).send("Método no permitido");
    }

    try {
      // Obtiene los datos del formulario (name, email, message)
      const data = request.body;

      // Validación simple
      if (!data.name || !data.email || !data.message) {
        return response.status(400).send("Faltan datos en el formulario");
      }

      // Guarda el mensaje en tu base de datos Firestore,
      // en una colección llamada "mensajes"
      const writeResult = await admin.firestore()
        .collection("mensajes")
        .add({
          name: data.name,
          email: data.email,
          message: data.message,
          timestamp: admin.firestore.FieldValue.serverTimestamp(),
        });

      // Envía una respuesta de éxito
      return response.status(201).send({ 
        message: "Mensaje guardado con éxito", 
        id: writeResult.id 
      });

    } catch (error) {
      console.error("Error al guardar en Firestore:", error);
      return response.status(500).send("Error interno del servidor");
    }
  });
});
