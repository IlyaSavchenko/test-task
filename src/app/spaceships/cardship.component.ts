import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cardship',
  templateUrl: './cardship.component.html',
  styleUrls: ['./cardship.component.css']
})
export class CardshipComponent implements OnInit {
  @Input() spacesh;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  public buy() {
    if (this.spacesh.avaliable > 0) {
      this.spacesh.avaliable--;
    } else {
      alert('Нет доступных кораблей модели: ' + this.spacesh.model);
    }
  }

  public moreInfo() {
    this.router.navigate(['/more',  this.spacesh.id]);
    console.log(this.spacesh);
    // this.router.navigate(['/more'], { queryParams: { id: 'popular' } });
  }

}
