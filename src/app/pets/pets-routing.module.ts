import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PetListComponent } from './pet-list/pet-list.component';
import { PetsComponent } from './pets/pets.component';


const routes: Routes = [
  {
    path: '',
    component: PetsComponent,
    children: [
      {
        path: '',
        component: PetListComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PetsRoutingModule { }
