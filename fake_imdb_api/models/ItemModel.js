const ItemModel = (sequelize, DataTypes) => {
    const Item = sequelize.define('Item', {
        titulo: {
            type: DataTypes.STRING,
            allowNull: false
        },
        ano_lancamento: {
            type: DataTypes.STRING,
            allowNull: false
        },
        descricao: {
            type: DataTypes.STRING,
            allowNull: false
        },
        sinopse: {
            type: DataTypes.STRING,
            allowNull: false
        },
        nota_avaliacao: {
            type: DataTypes.STRING,
            allowNull: false
        },
        genero: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {});

    return Item;
};

module.exports = ItemModel;