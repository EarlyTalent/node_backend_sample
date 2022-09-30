const express = require('express')

const { createComment } = require('../controller/postComment')

const router = express.Router()

router.route('/:id').post(createComment)

module.exports = router