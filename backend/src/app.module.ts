import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([]), TypeOrmModule.forRoot({})],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
