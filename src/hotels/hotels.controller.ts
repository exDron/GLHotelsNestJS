import { Controller, Get, Post, Body } from '@nestjs/common';
import { CreateHotelDto } from './dto/create-hotel.dto';
import { HotelsService } from './hotels.service';
import { IHotel } from './interfaces/Hotel';

@Controller('hotels')
export class HotelsController {

    constructor(private readonly hotelsService: HotelsService) {}

    @Post()
    async create(@Body() createHotelDto: CreateHotelDto) {
      this.hotelsService.create(createHotelDto);
    }

    @Get()
    async findAll(): Promise<IHotel[]> {
      return this.hotelsService.findAll();
    }
}
