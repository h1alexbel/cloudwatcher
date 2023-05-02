import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { User } from './users/user.entity';
import { ConfigsModule } from './configs/configs.module';
import { Config } from './configs/config.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      database: 'postgres',
      entities: [User, Config],
      synchronize: true,
      host: 'localhost',
      port: 5432,
      username: 'user',
      password: 'pass',
    }),
    UsersModule,
    ConfigsModule,
  ],
  providers: [],
})
export class ApiModule {}
