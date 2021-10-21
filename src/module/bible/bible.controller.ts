import { Controller, Get, Param, Post } from '@nestjs/common';
import { BibleService } from './bible.service';

@Controller('/bible')
export class BibleController {
  constructor(private readonly appService: BibleService) {}

  @Get('/:id')
  getLivro(@Param('id') id: string): Promise<any> {
    livro(id);
    return this.appService.getLivro(id);
  }
}

export function livro(id) {
  return id;
}
