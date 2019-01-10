import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list-spaceships',
  templateUrl: './list-spaceships.component.html',
  styleUrls: ['./list-spaceships.component.css']
})
export class ListSpaceshipsComponent implements OnInit {
  spaceships = [
    {id: '1', model: 'Prometeij', img: 'https://ytimg.googleusercontent.com/vi/faN5gEhnhHg/mqdefault.jpg', 
    type: 'Пассажирский', typeimg: 'assets/img/icons/ferry.svg',
     price: '1 900 000$', prod_date: '02.09.2008',  
     desc: 'Описание1', count_place: '500', size_team: '60',
    size_hold: '', weapon: '-', avaliable: '7'},
    {id: '2', model: 'Dedal', img: 'https://i.ytimg.com/vi/5VY4yzKmvGI/mqdefault.jpg', 
    type: 'Грузовой', typeimg: 'assets/img/icons/cargo-ship.svg', 
    price: '2 100 000$', prod_date: '30.04.2011',
    desc: 'Описание2', count_place: '150', size_team: '30', 
    size_hold: '', weapon: '-', avaliable: '4'},
    {id: '3', model: 'MILLENNIUM FALCON', img: 'https://www.ilgincbilgiler.com.tr/wp-content/uploads/2017/10/artik-nerdeyse-gercek-hayatta-var-olan-star-wars-bilimi-360x180.jpg',
     type: 'Военный',  typeimg: 'assets/img/icons/ship.svg', 
     price: '3 900 000$', prod_date: '05.05.2017', 
     desc: 'Описание3', count_place: '350', size_team: '350', 
     size_hold: '', weapon: '100', avaliable: '8'},
    {id: '4', model: 'NSEA Protector', img: 'http://www.tesla-tehnika.biz/images/space/spaceship.jpg', 
    type: 'Пассажирский',  typeimg: 'assets/img/icons/ferry.svg',
    price: '3 000 000$', prod_date: '17.11.2014',
    desc: 'Описание4', count_place: '1500', size_team: '200',
    size_hold: '', weapon: '-', avaliable: '5'},
    {id: '5', model: 'SDF-1', img: 'https://i.pinimg.com/236x/37/f7/6a/37f76a0f63e5ec0c08fcaea47e4fddf2--space-ship-battleship.jpg', 
    type: 'Грузовой',  typeimg: 'assets/img/icons/cargo-ship.svg', 
    price: '1 600 000$', prod_date: '25.07.2010',
    desc: 'Описание5', count_place: '100', size_team: '20',
    size_hold: '', weapon: '-', avaliable: '1'},
    {id: '6', model: 'Enterprise', img: 'http://blogs.harvard.edu/acts/files/2014/09/enterprise_1920x1200-300x187.png', 
    type: 'Пассажирский',  typeimg: 'assets/img/icons/ferry.svg',
     price: '2 400 000$', prod_date: '19.02.2015',
    desc: 'Описание6', count_place: '950', size_team: '150',
    size_hold: '', weapon: '-', avaliable: '9'}
  ];
  constructor() {
  }

  ngOnInit() {
  }

}
