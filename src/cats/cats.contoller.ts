import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Res,
} from '@nestjs/common';
import { Response } from 'express';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}
  @Get()
  getAll(@Res() res: Response) {
    res.status(HttpStatus.OK).json([]);
  }

  @Get(':id')
  getCatById(@Param('id', ParseIntPipe) id: number) {
    return `This action calls cat by id ${id}`;
  }

  @Post()
  create(@Body() body: any) {
    this.catsService.create(body);
  }

  @Put(':id')
  updateCateById(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateCatDto: any,
  ) {
    return `This action updates a cat by ${id} ${updateCatDto}`;
  }

  @Delete(':id')
  deleteCatById(@Param('id', ParseIntPipe) id: number) {
    return `This action deletes a cat by ${id}`;
  }
}
