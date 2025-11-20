import { Module } from '@nestjs/common';
import { TopicController } from './subindex.controller';
import { TopicService } from './subindex.service';

@Module({
  imports: [],
  controllers: [TopicController],
  providers: [TopicService],
})
export class TopicModule {}
