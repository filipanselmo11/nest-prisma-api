import { Injectable } from '@nestjs/common';
import { Post } from '@prisma/client';
import { PrismaService } from 'src/database/PrismaService';

@Injectable()
export class PostsService {
  constructor(private prismaService: PrismaService) {}

  async create(data: Post) {
    const posts = await this.prismaService.post.create({
      data,
    });
    return posts;
  }
  async findAll() {
    const posts = await this.prismaService.post.findMany();
    return posts;
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} post`;
  // }

  async update(id: number, data: Post) {
    const posts = await this.prismaService.post.update({
      data,
      where: {
        id: Number(id),
      },
    });

    return posts;
  }

  async remove(id: number) {
    const posts = await this.prismaService.post.delete({
      where: {
        id: Number(id),
      },
    });
    return posts;
  }
}
