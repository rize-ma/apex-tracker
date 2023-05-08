import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { lastValueFrom, map } from 'rxjs';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class ApexTrackerService {
  constructor(
    private readonly config: ConfigService,
    private http: HttpService,
  ) {}

  async getUser(platform: string, userId: string) {
    const data = await lastValueFrom(
      this.http
        .get(
          `${this.config.get('APEX_TRACKER_API_URL')}/${platform}/${userId}`,
          {
            headers: {
              'TRN-Api-Key': this.config.get('APEX_TRACKER_API_KEY'),
            },
          },
        )
        .pipe(map((response) => response.data)),
    );
    return data;
  }
}
