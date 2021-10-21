import { Module } from '@nestjs/common';

import { CapiService } from './capi.service';

@Module({
  imports: [],
  controllers: [CapiService],
  providers: [CapiService],
})
export class CapiModule {}
