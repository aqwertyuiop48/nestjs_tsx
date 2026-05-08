import { NestFactory } from '@nestjs/core';
import { ExpressAdapter, NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import express from 'express';

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

// Initialize on first request
const bootstrapPromise = bootstrap();

// Export for Vercel serverless
module.exports = async (req: express.Request, res: express.Response) => {
  await bootstrapPromise;
  server(req, res);
};

// Also export default for ESM
export default server;
