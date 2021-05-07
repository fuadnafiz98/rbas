import dotenv from "dotenv";
import knex, { Knex } from "knex";
import knexFile from "../knexfile";

dotenv.config();
const env = process.env.NODE_ENV || "development";

//@ts-ignore
const devEnv: Knex.Config<any> = knexFile[env];

console.log(devEnv);
const connection = knex(devEnv);

export default connection;
