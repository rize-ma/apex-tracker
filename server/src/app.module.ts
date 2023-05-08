import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApexTrackerModule } from './apex-tracker/apex-tracker.module';

@Module({
  imports: [ApexTrackerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
