import { Injectable } from '@nestjs/common';
import { fstat, readFileSync, writeFileSync } from 'fs';
import { writeFile } from 'fs/promises';
import axios from 'axios';
import * as cheerio from 'cheerio';
interface Bible {
  id: string;
  name: string;
  capitulos: any;
}
@Injectable()
export class BibleService {
  async getLivro(id: string): Promise<any> {
    let chapper: Bible[] = JSON.parse(
      readFileSync('./src/module/bible/util/bible.json', 'utf-8'),
    );
    const index = chapper.findIndex((chap) => chap.id == id);

    console.log(index);

    return chapper[index];
  }
  async getCap(id: string, cap: number): Promise<any> {
    let chapper: Bible[] = JSON.parse(
      readFileSync('./src/module/bible/util/bible.json', 'utf-8'),
    );
    console.log(cap);
    const index = chapper.findIndex((chap) => chap.id == id);

    return chapper[index]['capitulos'][cap - 1];
  }
  async getVer(id: string, cap: number, ver: number): Promise<any> {
    console.log(id);
    let chapper: Bible[] = JSON.parse(
      readFileSync('./src/module/bible/util/bible.json', 'utf-8'),
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
      readFileSync('./src/module/bible/util/newbible.json', 'utf-8'),
    );
    return velho[0]['velho'];
  }
  async getNovo(): Promise<any> {
    let novo: string[] = JSON.parse(
      readFileSync('./src/module/bible/util/newbible.json', 'utf-8'),
    );
    return novo[0]['novo'];
  }
  async getBible(): Promise<any> {
    let bible: string[] = JSON.parse(
      readFileSync('./src/module/bible/util/newbible.json', 'utf-8'),
    );
    return bible;
  }

  async verDia(): Promise<any> {
    let verDia = await axios.get('https://www.bibliaon.com/palavra_do_dia/');
    const $ = await cheerio.load(verDia['data']);

    return $('div#palavra_hoje.articlebody').text();
  }
}
