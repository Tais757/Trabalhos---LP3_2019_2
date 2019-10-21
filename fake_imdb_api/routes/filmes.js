const express = require('express');
const FilmeController = require('../controllers/FilmesController');

const router = express.Router();

router.get('/', FilmeController.recuperarTodos);

router.post('/', FilmeController.salvar);

router.get('/filmes/ano', FilmeController.recuperarItensPorDescricao);

router.get('/filmes/genero', FilmeController.recuperarItensPorDescricao);

router.get('/filmes/sinopse', FilmeController.recuperarItensPorDescricao);

router.get('/filmes/direcao', FilmeController.recuperarItensPorDescricao);

module.exports = router;