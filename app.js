const express = require("express");
const app = express();
const { Product, Recommendation } = require("./models");
const RecommendedProduct = require("./oop/RecommendedProduct");

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

// HOME
app.get("/", (req, res) => {
  res.render("home");
});

// FORM INPUT
app.get("/add", (req, res) => {
  res.render("form");
});

// SUBMIT PRODUK
app.post("/add", async (req, res) => {
  const { name, price, quality, stock } = req.body;

  await Product.create({
    name,
    price,
    quality,
    stock
  });

  res.redirect("/result");
});

// HASIL REKOMENDASI
app.get("/result", async (req, res) => {
  const products = await Product.findAll();

  const prices = products.map(p => p.price);
  const qualities = products.map(p => p.quality);
  const stocks = products.map(p => p.stock);

  const minPrice = Math.min(...prices);
  const maxQuality = Math.max(...qualities);
  const maxStock = Math.max(...stocks);

  const weights = {
    price: 0.4,
    quality: 0.4,
    stock: 0.2
  };

  const results = products.map(p => {
    const rp = new RecommendedProduct(
      p.name,
      p.price,
      p.quality,
      p.stock
    );

    const score = rp.calculateScore(
      minPrice,
      maxQuality,
      maxStock,
      weights
    );

    return {
      name: p.name,
      price: p.price,
      quality: p.quality,
      stock: p.stock,
      score: score.toFixed(3)
    };
  }).sort((a, b) => b.score - a.score);

  res.render("result", { results });
});

// SERVER
app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});

app.use(express.static("public"));
