const ProductController = require("../controllers/product.controller")

module.exports = app =>{
    app.get("/api/products", ProductController.getAllProducts)
    app.post("/api/products", ProductController.createProduct)
    app.get("/api/product/:id", ProductController.getOneProduct)
    app.put("/api/product/:id", ProductController.updateProduct)
    app.delete("/api/product/:id", ProductController.deleteProduct)
}