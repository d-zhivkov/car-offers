import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { BaseHttpService } from '../base-services/base-http.service';

import { MenuItem } from '../../models';

@Injectable()
export class MenuService extends BaseHttpService {
  constructor(private httpClient: HttpClient) {
    super()
  }

  getMenuItems(): Observable<MenuItem[]> {
    return this.httpClient.get<MenuItem[]>(`${this.baseUrl}/navbar`, { headers: this.headers});
  }
}
