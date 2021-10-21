import { Controller, Get, Param, Post } from '@nestjs/common';
import { BibleService } from './bible.service';

@Controller('/bible')
export class BibleController {
  constructor(private readonly appService: BibleService) {}

  @Get('/:id')
  getLivro(@Param('id') id: string): Promise<any> {
    return this.appService.getLivro(id);
  }
  @Get('/:id')
  getCapi(@Param('id') id: string): Promise<any> {
    return this.appService.getChapper(id);
  }
  @Get('/:id')
  getVer(@Param('id') id: string): Promise<any> {
    return this.appService.getVer(id);
  }
}
@Controller('/livro')
export class LivroController {
  constructor(private readonly appService: BibleService) {}
}
