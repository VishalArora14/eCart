const express = require("express");
const {
  registerUser,
  loginUser,
  logout,
  forgotPassword,
  resetPassword,
  getUserDetails,
  updatePassword,
  updateProfile,
  getAllUser,
  getSingleUser,
  updateUserRole,
  deleteUser,
} = require("../controllers/userControllers");
const { isAuthenticatedUser, authorisedRoles } = require("../middleware/auth");
const router = express.Router();

//Register a new User
router.route("/register").post(registerUser);

//login route
router.route("/login").post(loginUser);

//forgot passwd
router.route("/password/forgot").post(forgotPassword);

//logout route
router.route("/logout").get(logout);

//reset password
router.route("/password/reset/:token").put(resetPassword);

//get User Details
router.route("/me").get(isAuthenticatedUser, getUserDetails);

//update password
router.route("/password/update").put(isAuthenticatedUser, updatePassword);

//Update user Profile
router.route("/me/update").put(isAuthenticatedUser, updateProfile);

//Get all users data --admin
router
  .route("/admin/users")
  .get(isAuthenticatedUser, authorisedRoles("admin"), getAllUser);

//Get single user data --admin
router
  .route("/admin/user/:id")
  .get(isAuthenticatedUser, authorisedRoles("admin"), getSingleUser);

//Update Profile/user-role --admin
router
  .route("/admin/user/:id")
  .put(isAuthenticatedUser, authorisedRoles("admin"), updateUserRole);

//Delete User --admin
router
  .route("/admin/user/:id")
  .delete(isAuthenticatedUser, authorisedRoles("admin"), deleteUser);

module.exports = router;
