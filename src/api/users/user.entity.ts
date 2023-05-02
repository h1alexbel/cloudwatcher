import { AfterInsert, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  username: string;
  @Column()
  password: string;

  @AfterInsert()
  logInsert() {
    console.log(`Inserted User with id ${this.id}`);
  }
}
