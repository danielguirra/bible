import { Injectable } from '@nestjs/common';
import { readFileSync } from 'fs';
import { writeFile } from 'fs/promises';
interface Bible {
  id: string;
  name: string;
  capitulos: any;
}
@Injectable()
export class BibleKingJamesService {
  async getLivro(id: string): Promise<any> {
    let chapper: Bible[] = JSON.parse(
      readFileSync('./src/module/bible/util/kjanew.json', 'utf-8'),
    );
    const index = chapper.findIndex((chap) => chap.id == id);

    console.log(index);

    return chapper[index];
  }
  async getCap(id: string, cap: number): Promise<any> {
    let chapper: Bible[] = JSON.parse(
      readFileSync('./src/module/bible/util/kjanew.json', 'utf-8'),
    );
    console.log(cap);
    const index = chapper.findIndex((chap) => chap.id == id);

    return chapper[index]['capitulos'][cap - 1];
  }
  async getVer(id: string, cap: number, ver: number): Promise<any> {
    let chapper: any = JSON.parse(
      readFileSync('./src/module/bible/util/kjanew.json', 'utf-8'),
    );

    const index = chapper.findIndex((chap) => chap.id == id);
    console.log(ver);
    console.log(chapper[index]['capitulos'][cap][ver]);
    return chapper[index]['capitulos'][cap];
  }
  async getAll(): Promise<any> {
    let name: string[] = JSON.parse(
      readFileSync('./src/module/bible/util/names.json', 'utf-8'),
    );
    return name;
  }

  async getVelho(): Promise<any> {
    let velho: string[] = JSON.parse(
      readFileSync('./src/module/bible/util/kja.json', 'utf-8'),
    );
    return velho[0]['velho'];
  }
  async getNovo(): Promise<any> {
    let novo: string[] = JSON.parse(
      readFileSync('./src/module/bible/util/kja.json', 'utf-8'),
    );
    return novo[0]['novo'];
  }
  async getBible(): Promise<any> {
    let bible = JSON.parse(
      readFileSync('./src/module/bible/util/kjanew.json', 'utf-8'),
    );
    return bible[0];
  }

  async arruma(): Promise<any> {
    let bible = JSON.parse(
      readFileSync('./src/module/bible/util/kjanew.json', 'utf-8'),
    );
    let name: string[] = JSON.parse(
      readFileSync('./src/module/bible/util/names.json', 'utf-8'),
    );
    let c = 0;
    let te: any[] = [];
    while (c <= 65) {
      console.log(c);
      let ver = c + 1;
      let cap = bible[c]['capitulos'][c][ver.toString()][ver.toString()];

      console.log(cap);

      let king = {
        id: bible[c]['id'],
        livro: bible[c]['name'],
        capitulos: bible[c]['chapters'],
      };
      c++;
      te.push(king);
    }
    writeFile(
      './src/module/bible/util/kjanew.json',
      JSON.stringify(te),
      'utf-8',
    );
  }
}
