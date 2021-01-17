const router = require("express").Router();
const bookRoutes = require("./books");

// here are bookRoutes
router.use("/books", bookRoutes);

module.exports = router;