import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseHttpService } from '../../core/services/base-services/base-http.service';
import { MANUFACTURER_KEY } from '../constants';
import { Filter, FilterFlagButton, Offer } from '../models';

@Injectable()
export class OffersService extends BaseHttpService {

  constructor(private httpClient: HttpClient) {
    super();
  }

  getAll(filters: Filter[] = []): Observable<Offer[]> {
    let httpParams = new HttpParams();
    filters.forEach(filter => {
      httpParams.append(filter.name, filter.value)
    });

    return this.httpClient.get<Offer[]>(`${this.baseUrl}/offers`, { params: httpParams});
  }

  getOfferById(id: number): Observable<Offer> {
    return this.httpClient.get<Offer>(`${this.baseUrl}/offers/${id}`, {headers: this.headers});
  }

  getAllFilterFlagButtons(): Observable<FilterFlagButton[]> {
    return this.httpClient.get<FilterFlagButton[]>(`${this.baseUrl}/filterFlagButtons`, {headers: this.headers});
  }
}
