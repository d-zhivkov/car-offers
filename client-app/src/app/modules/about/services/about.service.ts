import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { BaseHttpService } from '../../core/services/base-services/base-http.service';
import { AboutContext } from '../models';

@Injectable()
export class AboutService extends BaseHttpService {

  constructor(private httpClient: HttpClient) {
    super();
  }

  getAboutContent(): Observable<AboutContext> {
    return this.httpClient.get<AboutContext>(`${this.baseUrl}/about`, { headers: this.headers});
  }
}
