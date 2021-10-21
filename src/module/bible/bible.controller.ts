import { Controller, Get, Param } from '@nestjs/common';
import { BibleService } from './bible.service';

@Controller('/bible')
export class AppController {
  constructor(private readonly appService: BibleService) {}

  @Get('/id')
  getHello(@Param('id') id: string): Promise<any> {
    return this.appService.getChapper(id);
  }
}
