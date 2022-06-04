import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MANUFACTURER_KEY } from '../../constants';
import { EngineTypes } from '../../enums';
import { Filter, FilterFlagButton, Offer } from '../../models';
import { OffersService } from '../../services/offers.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  list$: Observable<Offer[]>;
  flagButtons$: Observable<FilterFlagButton[]>;
  engineTypes: typeof EngineTypes;
  filters: Filter[] = [];

  constructor(private offersService: OffersService) {
    this.engineTypes = EngineTypes;
    this.list$ = this.offersService.getAll();
    this.flagButtons$ = this.offersService.getAllFilterFlagButtons();
  }

  getEngineName(key: number): string {
    let name = '';
    Object.values(this.engineTypes).forEach((value, index) => {
      if (value === key) {
        name = Object.keys(this.engineTypes)[index];
      }
    });
    return name;
  }

  onFlagButtonClicked(data: FilterFlagButton): void {
    if (this.filters.findIndex(el => el.name === MANUFACTURER_KEY) === -1 ){
      this.filters = [...this.filters, { name: MANUFACTURER_KEY, value: data.flag}];
    }
    else {
      let indexOfManufacturerFilter = this.filters.findIndex(el => el.name === MANUFACTURER_KEY);

      this.filters[indexOfManufacturerFilter].value = data.flag;
    }

    this.list$ = this.offersService.getAll(this.filters);
  }

  getFlagSource(flag: string): string {
    return `../../../../../assets/images/${flag}-flag.png`;
  }

  ngOnInit(): void {
  }

}
