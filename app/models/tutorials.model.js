const { Sequelize } = require("sequelize");

module.exports = (sequelize,Sequelize)=>{
    const Tutorial = sequelize.define("tutorials",{
        title: {
            type: Sequelize.STRING
        },
        description:{
            type: Sequelize.STRING
        }
    });
    
    return Tutorial;
}

