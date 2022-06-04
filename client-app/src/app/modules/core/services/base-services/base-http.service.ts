import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

import { environment } from 'src/environments/environment';

@Injectable()
export abstract class BaseHttpService {
    protected baseUrl: string;

    constructor() {
        this.baseUrl = environment.baseUrl;
    }

    get headers(): HttpHeaders {
        return new HttpHeaders();
        //.set('Accept', 'application/json').append('Cache-Control', 'no-cache').append('Pragma', 'no-cache')
    }
}
