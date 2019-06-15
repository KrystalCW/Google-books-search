const router = require("express").Router();
const booksController = require("../../controllers/booksController");

// Matches with "/api/books"
router.route("/saved")
  .get(booksController.findAll)

router.route("/search")
  .post(booksController.create);

// Matches with "/api/books/:id"
router
  .route("/saved/:id")
  .get(booksController.findById)
  .put(booksController.update)
  .delete(booksController.remove);

module.exports = router;
