export default class Movie {
  constructor(id, title, price, rating = null, universe = null) {
    this.id = id;
    this.title = title;
    this.price = price;
    this.rating = rating;
    this.universe = universe;
  }
}
