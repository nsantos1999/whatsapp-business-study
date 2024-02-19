import { Injectable } from '@nestjs/common';
import { WhatsAppWorker } from './workers/whatsapp-worker';

@Injectable()
export class AppService {
  constructor() {
    new WhatsAppWorker();
  }
  getHello(): string {
    return 'Hello World!';
  }
}
