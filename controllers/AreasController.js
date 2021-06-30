const { Area } = require('../database/models');

const AreasController = {
    index: async (req, res) =>{
        let areas = await Area.findAll();
        console.log(areas.map(a=>a.toJSON()));
        return res.render('areas/areas-index',{areas: areas});
    }
}

module.exports = AreasController;