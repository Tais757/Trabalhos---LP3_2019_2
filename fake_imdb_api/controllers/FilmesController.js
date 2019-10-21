const { Op } = require('sequelize');
const { Filme, Item } = require('../databases/db');

const controller = {
    recuperarTodos: async (req, res) => {
        const listas = await listas.findAll();
        return res.json(listas);
    },

    salvar: (req, res) => {
        const filme = req.body;

        if(!filme.nome){
            return res.status(400).json({ mensagem: 'Filme não informado'});
        }

        Filme.create(filme).then(filmeSalva => res.status(201).json(filmeSalva),
        erro => res.status(400).json(erro)).catch(erro => {
            console.log(erro);
            return res.status(500).json({ mensagem: 'Erro ao tentar salvar a lista' });
        });
    },

    recuperarItensPorDescricao: async (req, res) => {
        const { consulta, consulta1, consulta2, consulta3 } = req.body;
        let filmes = await Item.findAll({
            where:{
                descricao: {
                    [Op.iLike]: `% ${ consulta } %`
                }
            }
        });

        let direcao = await Item.findAll({
            where:{
                descricao: {
                    [Op.iLike]: `% ${ consulta1 } %`
                }
            }
        });

        let sinopse = await Item.findAll({
            where:{
                descricao: {
                    [Op.iLike]: `% ${ consulta2 } %`
                }
            }
        });
        
        let genero = await Item.findAll({
            where:{
                descricao: {
                    [Op.iLike]: `% ${ consulta3 } %`
                }
            }
        });
        return res.json(filmes, direcao, sinopse, genero);
    }
};

module.exports = controller;