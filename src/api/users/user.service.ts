import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private repo: Repository<User>,
  ) {
  }

  create(username: string, password: string) {
    const user = this.repo.create({ username, password });
    return this.repo.save(user);
  }

  async update(id: number, attrs: Partial<User>) {
    const user = await this.findOne(id);
    if (!user) {
      throw new NotFoundException('user not found');
    }
    Object.assign(user, attrs);
    return this.repo.save(user);
  }

  async delete(id: number) {
    const user = await this.findOne(id);
    return this.repo.remove(user);
  }

  async findOne(id: number) {
    const user = await this.repo.findOne({
      where: {
        id: id,
      },
    });
    if (!user) {
      throw new NotFoundException('user not found');
    }
    return user;
  }

  find(username: string) {
    return this.repo.find({
      where: {
        username: username,
      },
    });
  }

}
