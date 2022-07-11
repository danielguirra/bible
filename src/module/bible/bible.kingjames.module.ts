import { Module } from '@nestjs/common';

import { BibleKingJamesController } from './bible.kingjames.controller';
import { BibleKingJamesService } from './bible.kingjames.service';

@Module({
  imports: [],
  controllers: [BibleKingJamesController],
  providers: [BibleKingJamesService],
})
export class BibleKingJamesModule {}
