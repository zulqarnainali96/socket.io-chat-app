const { Router } = require("express");
const { createUser, getUsers, loginUser } = require("../controllers/user.controller");
const router = Router();

router.route("/create-account").post(createUser);
router.route("/get-all-users").get(getUsers);
router.route("/login-user").post(loginUser);

module.exports = router;
