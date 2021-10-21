import { Module } from '@nestjs/common';
import { BibleController } from './bible.controller';
import { BibleService } from './bible.service';

@Module({
  imports: [],
  controllers: [BibleController],
  providers: [BibleService],
})
export class BibleModule {}
