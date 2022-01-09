import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PetDetailComponent } from './pet-detail/pet-detail.component';
import { PetListComponent } from './pet-list/pet-list.component';
import { PetNewComponent } from './pet-new/pet-new.component';
import { PetsComponent } from './pets/pets.component';


const routes: Routes = [
  {
    path: '',
    component: PetsComponent,
    children: [
      {
        path: '',
        component: PetListComponent
      },
      { path: 'new', component: PetNewComponent },
      {
        path: ':petId',
        component: PetDetailComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PetsRoutingModule { }
