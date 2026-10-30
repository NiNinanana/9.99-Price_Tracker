import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ItemModel } from './items.entity.js';
import { Repository } from 'typeorm';

@Injectable()
export class ItemsService {
  constructor(
    @InjectRepository(ItemModel)
    private readonly itemRepository: Repository<ItemModel>,
  ) {}

  async getItems() {
    return this.itemRepository.find();
  }

  async getItem(id: string) {
    const item = await this.itemRepository.findOne({ where: { id } });

    if (!item) throw new NotFoundException();

    return item;
  }

  async createItem(data: {
    displayName: string;
    realName: string;
    store: string;
    amount: number;
    price: number;
    date: string;
  }) {
    const eachPrice = data.price / data.amount;

    const item = this.itemRepository.create({
      ...data,
      eachPrice,
    });

    const newItem = this.itemRepository.save(item);

    return newItem;
  }

  async updateItem(
    id: string,
    data: Partial<{
      displayName: string;
      realName: string;
      store: string;
      amount: number;
      price: number;
      date: string;
    }>,
  ) {
    const item = await this.itemRepository.findOne({ where: { id } });

    if (!item) throw new NotFoundException();

    const getEachPrice = () => {
      const price = data.price || item.price;
      const amount = data.amount || item.amount;

      return price / amount;
    };

    const newItem = await this.itemRepository.save({
      ...item,
      ...data,
      eachPrice: getEachPrice(),
    });

    return newItem;
  }

  async deleteItem(id: string) {
    const item = await this.itemRepository.findOne({ where: { id } });

    if (!item) throw new NotFoundException();

    await this.itemRepository.delete(id);

    return id;
  }
}
