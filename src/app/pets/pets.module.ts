import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PetsRoutingModule } from './pets-routing.module';
import { PetsComponent } from './pets/pets.component';
import { PetListComponent } from './pet-list/pet-list.component';


@NgModule({
  declarations: [PetsComponent, PetListComponent],
  imports: [
    CommonModule,
    PetsRoutingModule
  ],
  exports: [PetsComponent, PetListComponent]
})
export class PetsModule { }
