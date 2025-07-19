import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Coffee } from './entities/coffee.entity';

@Injectable()
export class CoffeesService {
  private coffees: Coffee[] = [
    {
      id: 1,
      name: 'Shipwreck Roast',
      brand: 'Buddy Brew',
      flavors: ['chocolate', 'vanilla'],
    },
  ];

  findAll() {
    return this.coffees;
  }

  findOne(id: number) {
    const coffee = this.coffees.find((coffee) => coffee.id === id);

    if (!coffee) {
      throw new NotFoundException(`Coffee #${id} not found`);
    }

    return coffee;
  }

  create(createCoffeeDto: any) {
    this.coffees.push(createCoffeeDto);
    return createCoffeeDto;
  }

  update(id: number, updateCoffeeDto: any) {
    const existingCoffee = this.findOne(id);

    if (existingCoffee) {
      Object.assign(existingCoffee, updateCoffeeDto);
      return existingCoffee;
    }

    return null;
  }

  remove(id: number) {
    const index = this.coffees.findIndex((coffee) => coffee.id === id);

    if (index > -1) {
      return this.coffees.splice(index, 1);
    }

    return null;
  }
}
