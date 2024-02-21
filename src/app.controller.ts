import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('/webhook/test')
  webhookTestWhatsAppBusiness(@Query() query: any, @Body() body: any) {
    console.log('data', query);
    console.log('body', body.entry[0].changes[0].value.messages[0]);

    this.appService.sendMessageToWhatsapp(
      body.entry[0].changes[0].value.messages[0].from,
    );

    return query['hub.challenge'];
  }
}
