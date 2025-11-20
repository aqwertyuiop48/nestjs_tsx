import { Module } from '@nestjs/common';
import { IndexController } from './subindex.controller';
import { IndexService } from './subindex.service';

@Module({
  imports: [],
  controllers: [IndexController],
  providers: [IndexService],
})
export class IndexModule {}
