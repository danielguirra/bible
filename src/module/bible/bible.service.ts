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
    let chapper: Bible[] = JSON.parse(
      readFileSync('./src/module/bible/util/bible.json', 'utf-8'),
    );
    const index = chapper.findIndex((chap) => chap.name == name);

    console.log(index);

    return chapper[index];
  }
  async getCap(name: string, cap: number): Promise<any> {
    let chapper: Bible[] = JSON.parse(
      readFileSync('./src/module/bible/util/bible.json', 'utf-8'),
    );
    console.log(cap);
    const index = chapper.findIndex((chap) => chap.name == name);

    return chapper[index]['livros'][cap - 1];
  }
  async getVer(name: string, cap: number, ver: number): Promise<any> {
    console.log(name);
    let chapper: Bible[] = JSON.parse(
      readFileSync('./src/module/bible/util/bible.json', 'utf-8'),
    );
    const index = chapper.findIndex((chap) => chap.name == name);
    return chapper[index]['livros'][cap - 1][ver - 1];
  }
}
