const express = require("express");
const {
  getAllProducts,
  getAdminProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getProductDetails,
  createProductReview,
  getProductReviews,
  deleteReview,
} = require("../controllers/productControllers");
const { isAuthenticatedUser, authorisedRoles } = require("../middleware/auth");
const router = express.Router();

//to get all created products
router.route("/products").get(getAllProducts);

//admin get products
router
  .route("/admin/products")
  .get(isAuthenticatedUser, authorisedRoles("admin"), getAdminProducts);

//to create a new product --admin
router
  .route("/admin/product/new")
  .post(isAuthenticatedUser, authorisedRoles("admin"), createProduct);

//to update, delete an already existing product
router
  .route("/admin/product/:id")
  .put(isAuthenticatedUser, authorisedRoles("admin"), updateProduct)
  .delete(isAuthenticatedUser, authorisedRoles("admin"), deleteProduct);

//to get a single product
router.route("/product/:id").get(getProductDetails);

// Update Product review
router.route("/review").put(isAuthenticatedUser, createProductReview);

//Get, Delete a product review
router
  .route("/reviews")
  .get(getProductReviews)
  .delete(isAuthenticatedUser, deleteReview);

module.exports = router;
