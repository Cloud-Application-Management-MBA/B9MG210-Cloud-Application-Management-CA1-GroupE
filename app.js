console.log("NEW APP.JS WITH CART APIs LOADED");
require('dotenv').config();
const express = require('express');
const sql = require('mssql');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(express.json());


// ================= DB CONFIG =================
const config = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  server: process.env.DB_SERVER,
  database: process.env.DB_NAME,
  options: {
    encrypt: true,
    trustServerCertificate: false
  }
};


// ================= CONNECT TO DB =================
sql.connect(config)
  .then(() => console.log("Connected to Azure SQL Database"))
  .catch(err => console.log("DB Connection Error:", err));


// ================= PRODUCT APIs =================

// 🔹 GET ALL PRODUCTS / FILTER
app.get('/api/products', async (req, res) => {
  try {
    const category = req.query.category;

    let query = "SELECT * FROM Products";
    const request = new sql.Request();

    if (category) {
      query += " WHERE category = @category";
      request.input('category', sql.VarChar, category);
    }

    const result = await request.query(query);
    res.json(result.recordset);

  } catch (err) {
    console.log(err);
    res.status(500).send("Error fetching products");
  }
});


// 🔹 GET SINGLE PRODUCT
app.get('/api/product/:id', async (req, res) => {
  try {
    const request = new sql.Request();
    request.input('id', sql.Int, req.params.id);

    const result = await request.query(
      "SELECT * FROM Products WHERE id = @id"
    );

    res.json(result.recordset[0]);

  } catch (err) {
    console.log(err);
    res.status(500).send("Error fetching product");
  }
});


// ================= CART APIs =================

// 🔹 ADD TO CART
app.post('/api/cart', async (req, res) => {
  try {
    const { productId, quantity } = req.body;

    const request = new sql.Request();
    request.input('productId', sql.Int, productId);
    request.input('quantity', sql.Int, quantity || 1);

    await request.query(`
      INSERT INTO Cart (productId, quantity)
      VALUES (@productId, @quantity)
    `);

    res.send("Added to cart");

  } catch (err) {
    console.log(err);
    res.status(500).send("Error adding to cart");
  }
});


// 🔹 GET CART
app.get('/api/cart', async (req, res) => {
  try {
    const result = await new sql.Request().query(`
      SELECT c.id, p.name, p.price, p.image, c.quantity
      FROM Cart c
      JOIN Products p ON c.productId = p.id
    `);

    res.json(result.recordset);

  } catch (err) {
    console.log(err);
    res.status(500).send("Error fetching cart");
  }
});


// 🔹 REMOVE ITEM FROM CART
app.delete('/api/cart/:id', async (req, res) => {
  try {
    const request = new sql.Request();
    request.input('id', sql.Int, req.params.id);

    await request.query("DELETE FROM Cart WHERE id = @id");

    res.send("Item removed");

  } catch (err) {
    console.log(err);
    res.status(500).send("Error removing item");
  }
});


// ================= CHECKOUT (ORDER) =================

app.post('/api/checkout', async (req, res) => {
  try {

    // Get cart items
    const cartResult = await new sql.Request().query(`
      SELECT c.productId, c.quantity, p.price
      FROM Cart c
      JOIN Products p ON c.productId = p.id
    `);

    const items = cartResult.recordset;

    if (items.length === 0) {
      return res.status(400).send("Cart is empty");
    }

    let total = 0;

    items.forEach(item => {
      total += item.price * item.quantity;
    });

    // Create order
    const orderResult = await new sql.Request()
      .input('total', sql.Int, total)
      .query(`
        INSERT INTO Orders (totalAmount)
        OUTPUT INSERTED.id
        VALUES (@total)
      `);

    const orderId = orderResult.recordset[0].id;

    // Insert order items
    for (let item of items) {
      await new sql.Request()
        .input('orderId', sql.Int, orderId)
        .input('productId', sql.Int, item.productId)
        .input('quantity', sql.Int, item.quantity)
        .input('price', sql.Int, item.price)
        .query(`
          INSERT INTO OrderItems (orderId, productId, quantity, price)
          VALUES (@orderId, @productId, @quantity, @price)
        `);
    }

    // Clear cart
    await new sql.Request().query("DELETE FROM Cart");

    res.send("Order placed successfully");

  } catch (err) {
    console.log(err);
    res.status(500).send("Checkout failed");
  }
});


// ================= START SERVER =================
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});