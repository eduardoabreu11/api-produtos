import knex from "knex";

const configSQlite = {
  client: 'sqlite3',
    useNullAsDefault:true, // or 'better-sqlite3'
    connection: {
    filename: process.env.DATABASE,
  },
}


const configPostgreSQL = {
     client: 'pg',
     connection: process.env.DATABASE,
  
};
 const knexDB = knex(
  process.env.CLIENT_DATABASE === "pg" ? configPostgreSQL : configSQlite
);

export default knexDB