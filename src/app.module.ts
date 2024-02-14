import { Module } from '@nestjs/common';
import { CatsController } from './cats/cats.contoller';

@Module({
  imports: [],
  controllers: [CatsController],
})
export class AppModule {}
