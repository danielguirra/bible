import { Injectable } from '@nestjs/common';
import { fstat, readFileSync, writeFileSync } from 'fs';
import { writeFile } from 'fs/promises';

interface Bible {
  name: string;
  livros: any;
}
@Injectable()
export class BibleService {
  async getLivro(name: string): Promise<any> {
    console.log(name);
    let chapper: Bible[] = JSON.parse(
      readFileSync('./src/module/bible/util/bible.json', 'utf-8'),
    );
    const index = chapper.findIndex((chap) => chap.name == name);

    console.log(index);

    return chapper[index];
  }
  async getChapper(name: string): Promise<any> {
    console.log(name);
    let chapper: Bible[] = JSON.parse(
      readFileSync('./src/module/bible/util/bible.json', 'utf-8'),
    );
    const index = chapper.findIndex((chap) => chap.name == name);

    console.log(index);

    return chapper[index];
  }
  async getVer(name: string): Promise<any> {
    console.log(name);
    let chapper: Bible[] = JSON.parse(
      readFileSync('./src/module/bible/util/bible.json', 'utf-8'),
    );
    const index = chapper.findIndex((chap) => chap.name == name);

    console.log(index);

    return chapper[index];
  }
}
