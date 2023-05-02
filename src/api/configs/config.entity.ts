import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Config {
  @PrimaryGeneratedColumn()
  id: number;
}
