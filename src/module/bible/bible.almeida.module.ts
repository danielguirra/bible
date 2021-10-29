import { Module } from '@nestjs/common';
import { BibleAlmeidaController } from './bible.almeida.controller';
import { BibleAlmeidaService } from './bible.almeida.service';
import { BibleKingJamesModule } from './bible.kingjames.module';

@Module({
  imports: [BibleKingJamesModule],
  controllers: [BibleAlmeidaController],
  providers: [BibleAlmeidaService],
})
export class BibleAlmeidaModule {}
