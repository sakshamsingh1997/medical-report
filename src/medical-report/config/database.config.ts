import * as dotenv from 'dotenv';

dotenv.config();

export const databaseConfig = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  server: process.env.DB_SERVER,
  database: process.env.DB_DATABASE,
  port: parseInt(process.env.DB_PORT, 10),
  options: {
    encrypt: false, // Use `true` if you're using Azure or want to enforce encryption
    trustServerCertificate: true, // Use `false` in production if certificate validation is required
  },
  connectionTimeout: parseInt(process.env.DB_CONNECTION_TIMEOUT, 10),
  requestTimeout: parseInt(process.env.DB_REQUEST_TIMEOUT, 10),
};
