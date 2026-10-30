import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ItemsService } from './items.service.js';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Get()
  getItems() {
    return this.itemsService.getItems();
  }

  @Get(':id')
  getItem(@Param('id') id: string) {
    return this.itemsService.getItem(id);
  }

  @Post()
  postItem(
    @Body('displayName') displayName: string,
    @Body('realName') realName: string,
    @Body('store') store: string,
    @Body('amount') amount: number,
    @Body('price') price: number,
    @Body('date') date: string,
  ) {
    return this.itemsService.createItem({
      amount,
      date,
      displayName,
      price,
      realName,
      store,
    });
  }

  @Put(':id')
  putItem(
    @Param('id') id: string,
    @Body('displayName') displayName: string,
    @Body('realName') realName: string,
    @Body('store') store: string,
    @Body('amount') amount: number,
    @Body('price') price: number,
    @Body('date') date: string,
  ) {
    return this.itemsService.updateItem(id, {
      amount,
      date,
      displayName,
      price,
      realName,
      store,
    });
  }

  @Delete(':id')
  deleteItem(@Param('id') id: string) {
    return this.itemsService.deleteItem(id);
  }
}
