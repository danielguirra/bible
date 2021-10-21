import { Controller, Get, Param, Post } from '@nestjs/common';
import { CapiService } from './capi.service';

@Controller('/cap')
export class CapiController {
  constructor(private readonly appService: CapiService) {}

  @Get('/:id')
  getLivro(@Param('id') id: string): Promise<any> {
    return this.appService.getLivro(id);
  }
}
