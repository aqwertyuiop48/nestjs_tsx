import { NestFactory } from '@nestjs/core';
import { ExpressAdapter, NestExpressApplication } from '@nestjs/platform-express';
import express from 'express';
import { AppModule } from '../src/app.module';

const server = express();

let app: NestExpressApplication;

async function bootstrap() {
  if (!app) {
    app = await NestFactory.create<NestExpressApplication>(
      AppModule,
      new ExpressAdapter(server),
    );
    app.enableCors();
    await app.init();
  }
  return app;
}

// Initialize once
const bootstrapPromise = bootstrap();

export default async (req: express.Request, res: express.Response) => {
  await bootstrapPromise;
  server(req, res);
};
