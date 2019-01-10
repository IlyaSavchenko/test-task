import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListSpaceshipsComponent } from './spaceships/list-spaceships.component';
import { CreateSpaceshipComponent } from './spaceships/create-spaceship.component';
import { SpaceshipComponent } from './spaceships/spaceship.component';


const routes: Routes = [
{path: 'list', component: ListSpaceshipsComponent},
{path: 'create', component: CreateSpaceshipComponent},
{path: '', redirectTo: 'list', pathMatch: 'full'},
{path: 'more/:id', component: SpaceshipComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
