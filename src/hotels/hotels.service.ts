import { Injectable } from '@nestjs/common';
import { IHotel } from './interfaces/Hotel';
import { CreateHotelDto } from './dto/create-hotel.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Hotel } from './entities/hotel.entity';
import { Repository } from 'typeorm';

@Injectable()
export class HotelsService {

  private readonly hotels: IHotel[] = [];

  constructor(@InjectRepository(Hotel) private readonly hotelsRepository: Repository<Hotel>) {}

  create(hotel: CreateHotelDto) {
    this.hotels.push(hotel);
  }

  findAll(): Promise<Hotel[]> {
    return this.hotelsRepository.find();
  }
}
