import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpaceShipClass } from './space-ship-class';
import { DataService } from '../data.service';

@Component({
  selector: 'app-spaceship',
  templateUrl: './spaceship.component.html',
  styleUrls: ['./spaceship.component.css']
})
export class SpaceshipComponent implements OnInit {
  private id;
  constructor(private route: ActivatedRoute, private dataService: DataService) { }

  private spaceShip: SpaceShipClass;
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
    this.spaceShip = this.dataService.getSpaceShip(this.id);
  }

}
