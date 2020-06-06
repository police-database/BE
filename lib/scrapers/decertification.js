const superagent = require('superagent');
const cheerio = require('cheerio');


const scrapeDecertification = () => {
  const url = 'https://docs.google.com/spreadsheets/d/1WIiBwSTsEkbLWoldiZG7Us7EVzcI7DD1A73nktn3cM4/pubhtml';
  return superagent
    .get(url)
    .then(response => cheerio.load(response.text))
    .then(res => makeScrapeObject(res));
};

const makeScrapeObject = html => {
  return html('tr').get()
    .slice(2)
    .map((el) => {
      const td = html(el).find('td');
      return ({
        DPSSTNo: td.eq(0).text(),
        LastName: td.eq(1).text(),
        FirstName: td.eq(2).text(),
        MiddleName: td.eq(3).text(),
        Employer: td.eq(4).text(),
        CaseClose: td.eq(5).text(),
        Type: td.eq(6).text(),
        EmploymentAction: td.eq(7).text(),
        StateCertification: td.eq(8).text(),
        DPSSTDescriptionLink: td.eq(9).text()
      });
    });
};

// scrapeDecertification(data => console.log(data));

module.exports = scrapeDecertification;


