import { Controller, Get, Param, Post } from '@nestjs/common';
import { BibleService } from './bible.service';

@Controller('/bible')
export class BibleController {
  @Get()
  getBible(): Promise<any> {
    return this.appService.getBible();
  }
  @Get('/verdia')
  getVerdia(): Promise<any> {
    return this.appService.verDia();
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
  constructor(private readonly appService: BibleService) {}
  @Get('/:name')
  getLivro(@Param('name') name: string): Promise<any> {
    return this.appService.getLivro(name);
  }
  @Get('/:name/:cap')
  getCap(@Param('name') name: string, @Param('cap') cap: any): Promise<any> {
    return this.appService.getCap(name, cap);
  }

  @Get('/:name/:cap/:ver')
  getVer(
    @Param('cap') cap: number,
    @Param('name') name: string,
    @Param('ver') ver: number,
  ): Promise<any> {
    return this.appService.getVer(name, cap, ver);
  }
}
