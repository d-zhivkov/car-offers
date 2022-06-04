import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { MenuService } from '../../services/http-services/menu.service';

import { MenuItem } from '../../models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  menuItems$: Observable<MenuItem[]>;

  constructor(private menuService: MenuService) {
    this.menuItems$ = this.menuService.getMenuItems();
  }

  ngOnInit(): void {
  }

}
