/** @format */

const Orders = require("../db/schema/orders");

//-------------------------------------------------------------
//----------GET------------------------------------------------
const getOrder = async function (req, res, next) {
  const data = await Orders.find().populate("user");

  res.status(200).json(data);
};
//-------------------------------------------------------------
//----------ADD------------------------------------------------

const addOrder = async function (req, res, next) {
  const { id } = req.user;
  const { orders } = req.body;

  const newProduct = new Orders({ orders, user: id });

  await newProduct.save();

  return res.status(200).json(newProduct);
};
// //-------------------------------------------------------------
// //-----------UPDATE--------------------------------------------

// const updateBasket = async function (req, res, next) {
//   const { id } = req.params;

//   const response = await Basket.findByIdAndUpdate(id, req.body);
//   if (!response) {
//     throw RequestError(404);
//   }
//   return res.status(200).json({ message: "qty update", response });
// };
// //-------------------------------------------------------------
// //------------DELETE-------------------------------------------

// const deleteBasket = async function (req, res, next) {
//   const { id } = req.params;

//   const response = await Basket.findByIdAndRemove(id);
//   if (!response) {
//     throw RequestError(404);
//   }
//   return res.json({ message: "product deleted", response });
// };

// //-------------------------------------------------------------
// //------------DELETE ALL---------------------------------------
// const deleteBasketAll = async function (req, res, next) {
//   const { id } = req.user;

//   const response = await Basket.deleteMany({ user: id });

//   if (!response) {
//     throw RequestError(404);
//   }
//   return res.json({ message: "basket deleted", response });
// };

module.exports = {
  getOrder,
  addOrder,
  // deleteBasket,
  // updateBasket,
  // deleteBasketAll,
};
