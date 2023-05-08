import { Module } from '@nestjs/common';
import { ApexTrackerController } from './apex-tracker.controller';
import { ApexTrackerService } from './apex-tracker.service';

@Module({
  controllers: [ApexTrackerController],
  providers: [ApexTrackerService]
})
export class ApexTrackerModule {}
