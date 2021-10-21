import { Injectable } from '@nestjs/common';
import { fstat, readFileSync, writeFileSync } from 'fs';
import { writeFile } from 'fs/promises';

interface Bible {
  name: string;
  livros: any;
}
@Injectable()
export class CapiService {
  async getCapi(id: number): Promise<any> {
    let cap = id - 1;
    let chapper: Bible[] = JSON.parse(
      readFileSync('./src/module/bible/util/bible.json', 'utf-8'),
    );
    const index = chapper.findIndex((chap) => chap.livros == cap);

    console.log(index);

    return chapper[index];
  }
}
