import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BibleAlmeidaModule } from './module/bible/bible.almeida.module';
import { BibleKingJamesService } from './module/bible/bible.kingjames.service';

@Module({
  imports: [BibleAlmeidaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
