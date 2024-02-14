import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';

@Controller('cats')
export class CatsController {
  @Get()
  getAll() {
    return `This action calls all cats`;
  }

  @Get(':id')
  getCatById(@Param('id', ParseIntPipe) id: number) {
    return `This action calls cat by id ${id}`;
  }

  @Post()
  create(@Body() createCatDto: any) {
    return `This action adds a new cat ${createCatDto}`;
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
