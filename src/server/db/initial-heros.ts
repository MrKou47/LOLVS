import db from './index';
import * as cheerio from 'cheerio';
import * as rp from 'request-promise';

interface IHeros {
  _id: number;
  name: string;
  shortcuts: string[];
}

const crawlHeros = async () => {
  const html = await rp('http://lol.replays.net/gl/page/20110127/1543859.html');
  const $ = cheerio.load(html);
  const tbodyDOM = $('#text').find('table');
  tbodyDOM.find('tbody tr').each(async (index, ele) => {
    if (index > 0) {
      const nameDOM = $(ele).find('td').eq(2);
      const shortcutDOM = nameDOM.next();
      const name = nameDOM.text().split(/,|，/)[0];
      const shortcuts = shortcutDOM.text().split(/,|，/);
      try {
        await db.collection('heros').insert({ name, shortcuts });
      } catch (error) {
        // tslint:disable-next-line:no-console
        console.log(`save name: ${name} broken!`);
        throw error;
      }
    }
  });
  // tslint:disable-next-line:no-console
  console.log('initial hero database success!');
};

crawlHeros();
