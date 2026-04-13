require('dotenv').config();
const express = require('express');
const sql = require('mssql');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(express.json());


// ================= DB CONFIG (FROM .env) =================
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


// ================= APIs =================

// 🔹 GET ALL PRODUCTS / FILTER BY CATEGORY
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


// ================= START SERVER =================
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});