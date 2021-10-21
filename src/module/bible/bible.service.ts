import { Injectable } from '@nestjs/common';
import { readFileSync } from 'fs';

@Injectable()
export class BibleService {
  async getVer(): Promise<any> {
    return 'Hello World!';
  }
  async getChapper(id): Promise<any> {
    let chapper: any[] = JSON.parse(
      readFileSync('./src/module/bible/util/bible.json', 'utf-8'),
    );
    const index = chapper.findIndex((chap) => (chap.id = id));

    return;
  }
}
