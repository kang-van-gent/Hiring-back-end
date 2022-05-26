const express = require("express");
const router = express.Router();
const orderController = require("../controllers/orderController");

router
  .route("/")
  .get(orderController.getAllOrders)
  .post(orderController.createNewOrder);

router
  .route("/:id")
  .put(orderController.updateOrder)
  .delete(orderController.deleteOrder);
router.route("/ordername").post(orderController.getOrder);

router.route("/newpass").put(orderController.updateOrderPass);

router.route("/getone").post(orderController.getOneOrder);
module.exports = router;
