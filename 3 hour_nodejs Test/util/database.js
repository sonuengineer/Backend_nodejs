const Sequelize=require('sequelize');

const sequelize=new Sequelize('product','root','root',{
                dialect:'mysql',
                host:'localhost'
        });
module.exports=sequelize;