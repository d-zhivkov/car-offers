import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable, Subscription } from 'rxjs';
import { ManufacturerTypes } from '../../enums';

import { Offer } from '../../models';
import { OffersService } from '../../services/offers.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit, OnDestroy {
  offer$!: Observable<Offer>;
  manufacturerTypes: typeof ManufacturerTypes;

  private subscription: Subscription;

  constructor(private route: ActivatedRoute, private offersService: OffersService) {
    this.manufacturerTypes = ManufacturerTypes;

    this.subscription = new Subscription();
  }

  ngOnInit(): void {
    let id = 0;
    this.subscription.add(this.route.params.subscribe(params => {
      id = params['id'];
    }));

    this.offer$ = this.offersService.getOfferById(id);
  }

  getManufacturerName(key: string): string {
    let name = '';
    Object.values(this.manufacturerTypes).forEach((value, index) => {
      if (value === key) {
        name = Object.keys(this.manufacturerTypes)[index];
      }
    });
    return name;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
