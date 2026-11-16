import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateItemDto } from './items.dto.js';
import { ItemsService } from './items.service.js';

@ApiTags('Items')
@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Get()
  @ApiOperation({ summary: 'Get all items array' })
  getItems() {
    return this.itemsService.getItems();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get an item' })
  getItem(@Param('id') id: string) {
    return this.itemsService.getItem(id);
  }

  @Post()
  @ApiOperation({ summary: 'Create an item' })
  postItem(@Body() createItemDto: CreateItemDto) {
    return this.itemsService.createItem(createItemDto);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update an item' })
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
  @ApiOperation({ summary: 'Delete an item' })
  deleteItem(@Param('id') id: string) {
    return this.itemsService.deleteItem(id);
  }
}
