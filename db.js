import mysql from "mysql"

export const db = mysql.createConnection({
    host: "db-victor.ceoweta0tvps.us-east-1.rds.amazonaws.com",
    user: "admin",
    password: "admin123",
    database: "ProjetoAC",
});