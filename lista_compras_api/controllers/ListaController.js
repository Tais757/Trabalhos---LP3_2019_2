const Lista = require('../models/Lista');
const Item = require('../models/Item');

const controller = {

    recuperarListas: async (req, res) => {
        const listas = await Lista.find(
            /**Executa os itens de unidade e descrição com valor maior ou igual a 1
             * e apenas seleciona os campos id, nome e descrição a serem retornados.
             */
            { unidade: {'$gte': 1}, descricao: {'$gte': 1} },
            'id nome descricao', function (err, docs) { 
                if (err){
                    return handleError(err);
                }
            });
        return res.json(listas);
    },

    recuperarItens: async (req, res) => {
        const { consulta } = req.body;
        const itens = await Lista.find({ 
            descricao: { '$regex': consulta, '$options': 'i' }}, 'id nome descricao'
        );
        return res.json(itens);
    },

    salvar: (req, res) =>{
        const { unidade, descricao } = req.body;
        if (unidade, descricao) {
            const lista = req.body;
            Lista
            .create(lista)
            .then(listaSalva => res.status(201).json(listaSalva))
            .catch(erro => {
                console.log(erro);
                res.status(500).json({ mensagem: 'Erro ao tentar salvar a lista'});
            });
        } else {
            return res.status(400).json({ mensagem: 'Unidade ou descrição não informado'});
        }
    },

    atualizar: (req, res) => {
        const { id } = req.params;
        const lista = req.body;

        Lista
            .findByIdAndUpdate(id, lista)
            .exec()
            .then(listaAtualizada => {
                /**
                 * Se encontrou a lista e
                 * a atualizou...
                 */
                if(listaAtualizada){
                    res.json({mensagem: 'Lista atualizada'});
                } else {
                    res
                        .status(404)
                        .json({ mensagem: 'Lista não encontrada' });
                }
            })
            .catch(erro => { console.log(erro)});
            res
                .status(500)
                .json({ mensagem: 'Erro ao tentar atualizar a lista' });
    },

    remover: async (req, res) => {
        const itens = await Lista.findOneAndRemove({ unidade: { '$lt': 3 },
        function (err, removed) {
            if (removed) {
                listas = { unidade: {'$lte': 3}}
            }
            
        } })
        .exec()
        .then(() => res.status(204).end(),
        erro => {
            console.log(erro);
        })
        .catch(erro => {
            console.log(erro);
            res.status(500).json({
                mensagem: 'Erro ao tentar remover a lista'
            });
        });
    }
};

module.exports = controller;