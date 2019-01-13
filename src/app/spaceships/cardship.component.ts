import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { SpaceShipClass } from './space-ship-class';
import { DataService } from '../data.service';

@Component({
  selector: 'app-cardship',
  // tslint:disable-next-line:max-line-length
  template: '<div class="col-12 col-sm-6 col-lg-4" *ngFor="let sp of spacesh; let i = index;"><div class="card-ship"><div><img class="photo" src="{{sp.img}}"></div><div><strong>Модель:</strong> {{sp.model}}</div><div><strong>Тип:</strong><img class="icon-type" placement="top" ngbTooltip="{{sp.type}}" src="{{sp.typeimg}}"></div><div><strong>Цена: </strong>{{sp.price}}</div><div><strong>Доступно: </strong>{{sp.avaliable}}</div><div class="btn-container"><button class="btn btn-success" (click)="this.dataService.buy(i)" style="margin-right: 10px;">Купить</button><button class="btn btn-warning" (click)="moreInfo(i)" type="button">Подробнее</button></div></div></div>',
  styleUrls: ['./cardship.component.css']
})
export class CardshipComponent implements OnInit {
  spacesh: SpaceShipClass[] = [];
  constructor(private router: Router, private dataService: DataService) { }

  ngOnInit() {
    this.spacesh = this.dataService.getData();
  }

  // public buy(i: number) {
  //   if (this.spacesh[i].avaliable > 0) {
  //     this.spacesh[i].avaliable--;
  //   } else {
  //     alert('Нет доступных кораблей модели: ' + this.spacesh[i].model);
  //   }
  //   console.log(i);
  // }

  public moreInfo(i: number) {
    this.router.navigate(['/more',  i]);
    // console.log(this.spacesh[i].id);
    // this.router.navigate(['/more'], { queryParams: { id: 'popular' } });
  }

}
