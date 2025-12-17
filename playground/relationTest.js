const { Product, Recommendation } = require("../models");

async function run() {
  const product = await Product.create({
    name: "Produk A",
    price: 10000,
    quality: 8,
    stock: 20
  });

  const rec = await Recommendation.create({
    score: 0.75,
    productId: product.id
  });

  const data = await Product.findAll({
    include: [Recommendation]
  });

  console.log(JSON.stringify(data, null, 2));
}

run();