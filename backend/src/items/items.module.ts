import { Module } from '@nestjs/common';
import { ItemsController } from './items.controller.js';
import { ItemsService } from './items.service.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemModel } from './items.entity.js';

@Module({
  imports: [TypeOrmModule.forFeature([ItemModel])],
  controllers: [ItemsController],
  providers: [ItemsService],
})
export class ItemsModule {}
