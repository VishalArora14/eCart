const express = require("express");
const {
  newOrder,
  myOrders,
  getSingleOrder,
  getAllOrders,
  updateOrder,
  deleteOrder,
} = require("../controllers/orderControllers");
const { isAuthenticatedUser, authorisedRoles } = require("../middleware/auth");
const router = express.Router();

//Creating a new order
router.route("/order/new").post(isAuthenticatedUser, newOrder);

//Get 'My orders' for a user
router.route("/order/me").get(isAuthenticatedUser, myOrders);

//Get an order by its id
router.route("/order/:id").get(isAuthenticatedUser, getSingleOrder);

//Get all orders --admin
router
  .route("/admin/orders")
  .get(isAuthenticatedUser, authorisedRoles("admin"), getAllOrders);

//Change order status --admin
//Delete order --admin
router
  .route("/admin/order/:id")
  .put(isAuthenticatedUser, authorisedRoles("admin"), updateOrder)
  .delete(isAuthenticatedUser, authorisedRoles("admin"), deleteOrder);

module.exports = router;
