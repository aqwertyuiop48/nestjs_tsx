import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {IndexModule} from './index/subindex/subindex.module';
import {TopicModule} from './topic/subindex/subindex.module';
import {SubjectModule} from './subject/subindex/subindex.module';
import {MarksModule} from './marks/subindex/subindex.module';

@Module({
  imports: [
    IndexModule,
    TopicModule,
    SubjectModule,
    MarksModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
