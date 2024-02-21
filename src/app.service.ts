import { Injectable } from '@nestjs/common';
import { WhatsAppWorker } from './workers/whatsapp-worker';
import axios from 'axios';

@Injectable()
export class AppService {
  constructor() {
    new WhatsAppWorker();
  }
  getHello(): string {
    return 'Hello World!';
  }

  async sendMessageToWhatsapp(phone: string) {
    try {
      const { data } = await axios.post(
        'https://graph.facebook.com/v18.0/240305365833042/messages',
        {
          messaging_product: 'whatsapp',
          recipient_type: 'individual',
          to: phone,
          type: 'text',
          text: {
            preview_url: true,
            body: 'Message from request',
          },
        },
        {
          headers: {
            Authorization: 'Bearer COMMENTED',
          },
        },
      );
      console.log(data);
    } catch (err) {
      console.log(err.response);
    }
  }
}
