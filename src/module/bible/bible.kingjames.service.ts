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
      readFileSync('./src/module/bible/util/kja.json', 'utf-8'),
    );
    const index = chapper.findIndex((chap) => chap.id == id);

    console.log(index);

    return chapper[index];
  }
  async getCap(id: string, cap: number): Promise<any> {
    let chapper: Bible[] = JSON.parse(
      readFileSync('./src/module/bible/util/kja.json', 'utf-8'),
    );
    console.log(cap);
    const index = chapper.findIndex((chap) => chap.id == id);

    return chapper[index]['capitulos'][cap - 1];
  }
  async getVer(id: string, cap: number, ver: number): Promise<any> {
    let chapper: any = JSON.parse(
      readFileSync('./src/module/bible/util/kja.json', 'utf-8'),
    );

    const index = chapper.findIndex((chap) => chap.id == id);
    return chapper[index]['capitulos'][cap - 1][ver - 1];
  }
  async getAll(): Promise<any> {
    let name: string[] = JSON.parse(
      readFileSync('./src/module/bible/util/names.json', 'utf-8'),
    );
    return name;
  }

  async getVelho(): Promise<any> {
    let velho: string[] = JSON.parse(
      readFileSync('./src/module/bible/util/kja2.json', 'utf-8'),
    );
    return velho[0]['velho'];
  }
  async getNovo(): Promise<any> {
    let novo: string[] = JSON.parse(
      readFileSync('./src/module/bible/util/kja2.json', 'utf-8'),
    );
    return novo[0]['novo'];
  }
  async getBible(): Promise<any> {
    let bible = JSON.parse(
      readFileSync('./src/module/bible/util/kja2.json', 'utf-8'),
    );
    return bible[0];
  }

  // async arruma(): Promise<any> {
  //   let bible = JSON.parse(
  //     readFileSync('./src/module/bible/util/kjanovo.json', 'utf-8'),
  //   );
  //   let bible2 = JSON.parse(
  //     readFileSync('./src/module/bible/util/kjavelho.json', 'utf-8'),
  //   );
  //   let c = 39;
  //   let te: any[] = [];
  //   let full = {
  //     velho: bible2,
  //     novo: bible,
  //   };
  //   te.push(full);
  //   writeFile('./src/module/bible/util/kja2.json', JSON.stringify(te), 'utf-8');
  // }
}
