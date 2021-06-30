// Criar e exportar uma função
// Essa função recebe dois parametros: sequelize, DataTypes
// A função retorna um objeto que é definido a partir do sequelize.define

module.exports = (sequelize, DataTypes) => {

    const area = sequelize.define(
        'Area',
        {
            tipo: DataTypes.STRING(100),
        },
        {
            tableName: 'areas',
            timestamps: false
        }
    );

    return area;

}