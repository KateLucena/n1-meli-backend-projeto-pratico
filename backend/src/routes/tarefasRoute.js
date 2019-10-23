const express = require('express')
const router = express.Router()
const controller = require('../controllers/tarefasController')

router.get('/', controller.get)
router.get('/concluido/filtrar', controller.getConcluido)
router.get('/:nome/buscar', controller.getNome)
router.get('/:id', controller.getById)


module.exports = router