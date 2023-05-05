import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { User } from './users/user.entity';
import { ConfigsModule } from './configs/configs.module';
import { Config } from './configs/config.entity';
import * as process from "process";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      database: 'postgres',
      entities: [User, Config],
      synchronize: true,
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
    }),
    UsersModule,
    ConfigsModule,
  ],
  providers: [],
})
export class ApiModule {}
