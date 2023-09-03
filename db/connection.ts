import { Sequelize } from 'sequelize';


const db = new Sequelize('ventas','root','',{
    host: 'localhost',
    dialect:'mysql'
});

export default db;
