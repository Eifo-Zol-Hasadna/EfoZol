var express		 = require("express");
var router       = express.Router();

router.post("/api/external/login", require("./api/external/auth/postLogin.js").do);

//GET
router.get("/api/external/branches", require("./api/external/branches/getBranches.js").do);
router.get("/api/external/products/:name", require("./api/external/products/getProduct.js").do);
router.get("/api/external/products", require("./api/external/products/getProducts.js").do);
//POST
router.post("/api/external/stores", require("./api/external/stores/postStores.js").do);
router.post("/api/external/branches", require("./api/external/branches/postBranches.js").do);
router.post("/api/external/products", require("./api/external/products/postProduct.js").do);
//PUT
router.put("/api/external/stores/:id", require("./api/external/stores/putStores.js").do);
router.put("/api/external/branches/:id", require("./api/external/branches/putBranches.js").do);
router.put("/api/external/products/:id", require("./api/external/products/putProduct.js").do);

module.exports.routes = router;