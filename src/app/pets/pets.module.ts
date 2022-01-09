import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PetsRoutingModule } from './pets-routing.module';
import { PetsComponent } from './pets/pets.component';
import { PetListComponent } from './pet-list/pet-list.component';
import { PetDetailComponent } from './pet-detail/pet-detail.component';
import { PetNewComponent } from './pet-new/pet-new.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [PetsComponent, PetListComponent, PetDetailComponent, PetNewComponent],
  imports: [
    CommonModule,
    PetsRoutingModule,
    ReactiveFormsModule
  ],
  exports: [PetsComponent, PetListComponent, PetDetailComponent, PetNewComponent]
})
export class PetsModule { }
