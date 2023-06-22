import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { lastValueFrom, map } from 'rxjs';
import { ConfigService } from '@nestjs/config';
import { ErrorMessage, UserData } from './type/user';

@Injectable()
export class ApexTrackerService {
  constructor(
    private readonly config: ConfigService,
    private http: HttpService,
  ) {}

  async getUser(
    platform: string,
    userId: string,
  ): Promise<UserData | ErrorMessage> {
    try {
      const data: UserData = await lastValueFrom(
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
    } catch (e: any) {
      return { data: { message: 'ユーザが見つかりませんでした' } };
    }
  }
}
