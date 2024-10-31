const venom = require('venom-bot');

venom
  .create({
    session: 'session-name', // Nome da sessão (ou diretório) para salvar arquivos temporários
    multidevice: true // Ativar suporte a multidevice
  })
  .then((client) => start(client))
  .catch((error) => {
    console.log(error);
  });

function start(client) {
  client.onMessage((message) => {
    if (message.body === 'Oi' && message.isGroupMsg === false) {
      client
        .sendText(message.from, 'Olá! Como posso ajudar?')
        .then((result) => {
          console.log('Mensagem enviada: ', result);
        })
        .catch((error) => {
          console.error('Erro ao enviar mensagem: ', error);
        });
    }
  });
}
