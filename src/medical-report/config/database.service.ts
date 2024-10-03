import { Injectable } from '@nestjs/common';
import * as sql from 'mssql';
import { databaseConfig } from './database.config';

@Injectable()
export class DatabaseService {
  private pool: sql.ConnectionPool;

  async connect(): Promise<sql.ConnectionPool> {
    if (!this.pool) {
      this.pool = await sql.connect(databaseConfig);
    }
    return this.pool;
  }

  async query(query: string, inputs: any[] = []): Promise<any> {
    const pool = await this.connect();
    const request = pool.request();
    inputs.forEach(input => {
      request.input(input.name, input.type, input.value);
    });
    return request.query(query);
  }
}
