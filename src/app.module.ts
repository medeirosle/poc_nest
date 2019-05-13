import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats/controllers/cats.controller';
import { CatsModule } from './cats/cats.module';
import CatsService from './cats/services/cats.service';

@Module({
  imports: [CatsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
