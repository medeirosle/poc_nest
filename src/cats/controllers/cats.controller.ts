import { Controller, Get, Req, Post, Body } from '@nestjs/common';
import { Request } from 'express';
import CatsService from '../services/cats.service';
import CatDto from '../dto/cat.dto';

@Controller('cats')
export class CatsController {
    
    constructor(
        private readonly catsService: CatsService
    ) {                
    }

    @Post()
    async create(@Body() createCatDto: CatDto) {
        this.catsService.create(createCatDto)
    }

    @Get()
    findAll(): any {
        return this.catsService.findAll()
    }    
}
