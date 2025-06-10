const db = require('../config/db');

class Product {
  static getAll() {
    return db.execute('SELECT * FROM products');
  }
  static getById(id) {
    return db.execute('SELECT * FROM products WHERE id = ?', [id]);
  }
  static add({ title, price, idate, quantity }) {
    return db.execute(
      'INSERT INTO products (title, price, idate, quantity) VALUES (?, ?, ?, ?)',
      [title, price, idate, quantity]
    );
  }
  static update(id, { title, price, idate, quantity }) {
    return db.execute(
      'UPDATE products SET title = ?, price = ?, idate = ?, quantity = ? WHERE id = ?',
      [title, price, idate, quantity, id]
    );
  }
  static delete(id) {
    return db.execute('DELETE FROM products WHERE id = ?', [id]);
  }
}

module.exports = Product;
