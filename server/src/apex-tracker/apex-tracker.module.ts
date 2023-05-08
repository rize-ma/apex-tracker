import { Module } from '@nestjs/common';
import { ApexTrackerController } from './apex-tracker.controller';
import { ApexTrackerService } from './apex-tracker.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [ApexTrackerController],
  providers: [ApexTrackerService],
})
export class ApexTrackerModule {}
