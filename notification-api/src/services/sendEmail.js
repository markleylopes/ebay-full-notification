const sendEmail = require('./email');

module.exports = async ({ keywords = 'dog', email, data }) => {
  const htmlTemplate = ({
    title,
    ebayUrl,
    galleryURL,
    currentPrice,
  }) => `
  <div \
  style="\
  box-shadow: 0 0 10px #999;\
  border: solid 1px #444;\
  border-radius: 4px;\
  width: 550px;\
  height: 150px;\
  margin: 10px;\
  font-family: sans-serif"\
  >
  <img style="\
  display: inline-block;\
  border-radius: 4px;"
  src="${galleryURL}" \
  alt="${keywords}" \
  width="150" \
  height="150"\
  >
  <div \
  style="\
  display: inline-block;\
  margin: 15px;\
  width: 370px;\
  position: absolute;"\
  >
  <p><span>Titulo:</span> ${title}</p>
  <p><span>Preço:</span> $ ${currentPrice}</p>
  <p><a href="${ebayUrl}" target="_blank">Clique aqui para ver o produto</a></p>
  </div>
  </div>`;

  const html = `
    <div>
    <h1>Produtos de menor valor para a palavra: ${keywords}</h1>
    ${data.map((item) => htmlTemplate(item))}
  </div
    `;
  const emailParams = {
    to: email,
    html,
    subject: `[notification Api] ${keywords}`,
  };
  return sendEmail(emailParams);
};
