const {QueryTypes, Sequelize} = require('sequelize');
const config = require('../database/config/config').development;

const sequelize = new Sequelize(config);
sequelize.query("SELECT * FROM areas",{ type: QueryTypes.SELECT }).then(
    areas => {
        console.log(areas);
        process.exit();
    }
)