import { Module } from '@nestjs/common';
import { BibleController } from './bible.controller';
import { BibleService } from './bible.service';
import { CapiModule } from './capi.module';

@Module({
  imports: [CapiModule],
  controllers: [BibleController],
  providers: [BibleService],
})
export class BibleModule {}
