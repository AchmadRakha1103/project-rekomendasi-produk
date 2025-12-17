const { Product } = require("../models");
const RecommendedProduct = require("../oop/RecommendedProduct");

async function run() {
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
      score
    };
  });

  console.log(results.sort((a, b) => b.score - a.score));
}

run();