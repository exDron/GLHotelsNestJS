import { Injectable } from '@nestjs/common';
import { IHotel } from './interfaces/Hotel';
import { CreateHotelDto } from './dto/create-hotel.dto';

@Injectable()
export class HotelsService {

    private readonly hotels: IHotel[] = [];

  create(hotel: CreateHotelDto) {
    this.hotels.push(hotel);
  }

  findAll(): IHotel[] {
    return this.hotels;
  }
}
