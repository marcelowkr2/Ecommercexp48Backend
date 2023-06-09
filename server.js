import express from "express";
import products from "./data/Products.js";
import dotenv from "dotenv"

dotenv.config();
const app = express()

// Carregar produtos do server
app.get("/api/product",(req, res) => {
    res.json(products);
});

// Carregar somente um produto
app.get("/api/product/:id",(req, res) => {
    const product = products.find((p) => p._id === req.params.id);
    res.json(product);
});

app.get("/",(req, res) => {
    res.send("API Rodando...");
});

const PORT = process.env.PORT || 1000;

app.listen(PORT, console.log(`Servidor iniciado na porta ${PORT}🚀`));