const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

// for API routes
router.use("/api", apiRoutes);

// Send every other request to the React app
// Define any API routes before this runs
router.use(function (req, res) {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;