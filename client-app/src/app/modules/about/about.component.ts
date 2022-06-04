import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { CoreModule } from '../core/core.module';

import { AboutService } from './services/about.service';

import { AboutContext } from './models';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  standalone: true,
  imports: [
    CoreModule
  ],
  providers: [
    AboutService
  ]
})
export class AboutComponent implements OnInit {
  aboutContext$: Observable<AboutContext>;

  constructor(private aboutService: AboutService) {
    this.aboutContext$ = this.aboutService.getAboutContent();
  }

  ngOnInit(): void {
  }

}
