const Product = require("./Product");

class RecommendedProduct extends Product {
  calculateScore(minPrice, maxQuality, maxStock, weights) {
    // Normalisasi
    const Nh = minPrice / this.price;          // Harga (cost)
    const Nk = this.quality / maxQuality;      // Kualitas (benefit)
    const Ns = this.stock / maxStock;          // Stok (benefit)

    // Weighted Score
    const score =
      Nh * weights.price +
      Nk * weights.quality +
      Ns * weights.stock;

    return score;
  }
}

module.exports = RecommendedProduct;