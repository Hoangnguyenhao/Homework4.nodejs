const Product = require('../models/product.model');

exports.getAll = async (req, res) => {
  const [rows] = await Product.getAll();
  res.json(rows);
};

exports.getById = async (req, res) => {
  const [rows] = await Product.getById(req.params.id);
  rows.length ? res.json(rows[0]) : res.status(404).json({ msg: 'Not found' });
};

exports.add = async (req, res) => {
  const { title, price, idate, quantity } = req.body;
  await Product.add({ title, price, idate, quantity });
  res.status(201).json({ msg: 'Product added' });
};

exports.update = async (req, res) => {
  const { title, price, idate, quantity } = req.body;
  await Product.update(req.params.id, { title, price, idate, quantity });
  res.json({ msg: 'Product updated' });
};

exports.delete = async (req, res) => {
  await Product.delete(req.params.id);
  res.json({ msg: 'Product deleted' });
};
