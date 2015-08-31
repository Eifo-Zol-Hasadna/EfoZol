var express = require("express");
var router = express.Router();
var jwt = require('jsonwebtoken');

router.post("/api/external/login", require("./api/external/auth/postLogin.js").do);
router.post("/api/external/register", require("./api/external/auth/register.js").do);
// all routes below need to be authenticated 
router.use(function (req, res, next) {
  // check header or url parameters or post parameters for token
  var token = req.body.token || req.query.token || req.headers['access-token'];
  // decode token
  if (token) {
    // verifies secret and checks exp
    jwt.verify(token, GLOBAL.Settings.secret, function (err, decoded) {
      if (err) 
      {
        return res.status(403).send({
          success: false,
          message: 'Failed to authenticate token.'
        });
      }
      else {
        // if everything is good, save to request for use in other routes
        req.decoded = decoded;
        next();
      }
    });
  }
  else {
    // if there is no token
    // return an error
    return res.status(403).send({
      success: false,
      message: 'No token provided.'
    });

  }
});
//GET
router.get("/api/external/branches", require("./api/external/branches/getBranches.js").do);
router.get("/api/external/products/:name", require("./api/external/products/getProduct.js").do);
router.get("/api/external/products", require("./api/external/products/getProducts.js").do);
router.get("/api/external/stores", require("./api/external/stores/getStores.js").do);

//POST
router.post("/api/external/stores", require("./api/external/stores/postStores.js").do);
router.post("/api/external/branches", require("./api/external/branches/postBranches.js").do);
router.post("/api/external/products", require("./api/external/products/postProduct.js").do);

router.post("/api/external/branchesInRange", require("./api/external/branches/branchesInRange.js").do);
router.post("/api/external/findBest", require("./api/external/branches/findBest.js").do);

router.post("/api/external/prices", require("./api/external/price/postPrice.js").do);
//PUT
router.put("/api/external/stores/:id", require("./api/external/stores/putStores.js").do);
router.put("/api/external/branches/:id", require("./api/external/branches/putBranches.js").do);
router.put("/api/external/products/:id", require("./api/external/products/putProduct.js").do);



module.exports.routes = router;