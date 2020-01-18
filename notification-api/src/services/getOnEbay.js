const axios = require('axios');

const EBAY_SECURITY_APPNAME = 'walisson-alertsAp-PRD-c90f2f5e3-5a7775bd';

module.exports = async ({ keywords = 'dog', email }) => {
  // console.log('word: ', keywords, '| email: ', email);

  const url = `https://svcs.ebay.com/services/search/FindingService/v1?\
SECURITY-APPNAME=${EBAY_SECURITY_APPNAME}\
&OPERATION-NAME=findItemsByKeywords\
&RESPONSE-DATA-FORMAT=JSON&REST-PAYLOAD\
&buyerPostalCode=01101\
&sortOrder=PricePlusShippingLowest\
&keywords=${keywords}\
&paginationInput.entriesPerPage=3`;

  const response = await axios.get(url);
  const { findItemsByKeywordsResponse } = response.data;
  const { searchResult } = findItemsByKeywordsResponse[0];
  const allItens = searchResult[0].item;
  const rows = `${searchResult[0]['@count']}`;
  if (+rows <= 0) return { rows, data: [] };
  const data = allItens.map((i, index) => (
    {
      ranking: index + 1,
      title: i.title[0],
      ebayUrl: i.viewItemURL[0],
      // eslint-disable-next-line dot-notation
      currentPrice: i.sellingStatus[0].convertedCurrentPrice[0]['__value__'],
      galleryURL: i.galleryURL[0],
    }));
  return { keywords, email, data };
};
