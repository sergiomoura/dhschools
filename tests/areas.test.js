const { sequelize, Area } = require('../database/models');

Area.findAll().then(
    data => {
        console.log(data.map( u => u.toJSON()));
        sequelize.close();
    }
)