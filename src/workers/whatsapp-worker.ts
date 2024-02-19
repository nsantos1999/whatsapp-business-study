import { Client } from 'whatsapp-web.js';

export class WhatsAppWorker {
  client: Client;

  constructor() {
    this.client = new Client({});

    this.startProcess();
  }

  private async startProcess() {
    this.client.on('qr', (qr) => {
      console.log(qr);
    });

    this.client.on('ready', async () => {
      console.log('Client is ready!');
    });

    this.client.on('message', async (message) => {
      console.log(message.body);
      await message.reply('Replying for bot');
    });

    this.client.initialize();
  }
}
