import { Controller, Get, Param } from '@nestjs/common';
import { ApexTrackerService } from './apex-tracker.service';

@Controller('apex-tracker')
export class ApexTrackerController {
  constructor(private readonly apexTracker: ApexTrackerService) {}

  @Get('first')
  InitialAccess() {
    return { data: { message: 'アクセス成功' } };
  }

  @Get(':platform/:userId')
  getUser(
    @Param('platform') platform: string,
    @Param('userId') userId: string,
  ) {
    return this.apexTracker.getUser(platform, userId);
  }
}
