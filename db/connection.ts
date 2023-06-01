import { Sequelize } from 'sequelize';


const db = new Sequelize('Pokedex','root','',{
    host: 'localhost',
    dialect:'mysql'
});

export default db;
