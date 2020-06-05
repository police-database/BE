const superagent = require('superagent');
const cheerio = require('cheerio');


const scrapeDecertification = () => {
  // const url = 'https://spreadsheets.google.com/feeds/list/1WIiBwSTsEkbLWoldiZG7Us7EVzcI7DD1A73nktn3cM4/od6/public/values?alt=json';
  const url = 'https://docs.google.com/spreadsheets/d/1WIiBwSTsEkbLWoldiZG7Us7EVzcI7DD1A73nktn3cM4/pubhtml';
  return superagent
    .get(url)
    .then(response => cheerio.load(response.text))
    .then(res => makeScrapeObject(res))
    .then(data => console.log(data));
};

const makeScrapeObject = html => {
  return html('tr').get()
    .slice(2)
    .map((el) => {
      const td = html(el).find('td');
      return ({
        DPSSTNo: td.eq(0).text(),
        LastName: td.eq(1).text(),
        FirstName: td.eq(2).text()
      });
    });
};

scrapeDecertification(data => console.log(data));

module.exports = scrapeDecertification;


