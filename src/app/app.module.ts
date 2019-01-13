import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateSpaceshipComponent } from './spaceships/create-spaceship.component';
import { ListSpaceshipsComponent } from './spaceships/list-spaceships.component';
import { CardshipComponent } from './spaceships/cardship.component';
import { SpaceshipComponent } from './spaceships/spaceship.component';
import { NgbdTooltipBasic } from './tooltip-basic';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { DataService } from './data.service';


@NgModule({
  declarations: [
    AppComponent,
    CreateSpaceshipComponent,
    ListSpaceshipsComponent,
    CardshipComponent,
    SpaceshipComponent,
    NgbdTooltipBasic
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
