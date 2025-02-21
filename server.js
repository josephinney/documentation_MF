import express from "express";
import path from "path";
import cors from "cors";
import { fileURLToPath } from "url";

const app = express();
const PORT = process.env.PORT || 3006;

// Obtener __dirname en ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Permitir CORS globalmente
app.use(cors());
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// Manejar preflight requests de CORS 
app.options("*", (req, res) => {
    res.sendStatus(204);
});

// Servir archivos estáticos con CORS habilitado
app.use(express.static(path.join(__dirname, 'dist'), {
    setHeaders: (res) => {
        res.setHeader("Access-Control-Allow-Origin", "*");
    }
}));

// Manejar cualquier otra ruta y devolver index.html
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "dist", "index.html"));
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
