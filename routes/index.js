const router = require('express').Router();

router.get('/', (req, res, next) => {
  res.status(200).send({
    key: "test data"
  })
})

module.exports = router;