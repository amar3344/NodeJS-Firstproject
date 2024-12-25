const express = require("express");
const router = express.Router()

const {registration, login} = require("../controllers/user")

router.post("/",registration)
router.post("/login",login)

module.exports = router;