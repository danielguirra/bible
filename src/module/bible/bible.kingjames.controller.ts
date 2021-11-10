import { Controller, Get, Param } from '@nestjs/common';
import { BibleKingJamesService } from './bible.kingjames.service';

@Controller('/kja')
export class BibleKingJamesController {
  constructor(private readonly appService: BibleKingJamesService) {}
  @Get()
  getBible(): Promise<any> {
    return this.appService.getBible();
  }
  @Get('/nomes')
  getAll(): Promise<any> {
    return this.appService.getAll();
  }
  @Get('/velho')
  getVel(): Promise<any> {
    return this.appService.getVelho();
  }
  @Get('/novo')
  getNov(): Promise<any> {
    return this.appService.getNovo();
  }

  @Get('/:livro')
  getLivro(@Param('livro') livro: string): Promise<any> {
    return this.appService.getLivro(livro);
  }
  @Get('/:livro/capitulos')
  getNumeroDeCapitulos(@Param('livro') livro: string): Promise<any> {
    return this.appService.getNumerosDeCapitulos(livro);
  }
  @Get('/:livro/:capitulo')
  getCap(
    @Param('livro') livro: string,
    @Param('capitulo') capitulo: number,
  ): Promise<any> {
    return this.appService.getCap(livro, capitulo);
  }

  @Get('/:livro/:capitulo/:versiculo')
  getVer(
    @Param('livro') livro: string,
    @Param('capitulo') capitulo: number,
    @Param('versiculo') versiculo: number,
  ): Promise<any> {
    return this.appService.getVer(livro, capitulo, versiculo);
  }
}
