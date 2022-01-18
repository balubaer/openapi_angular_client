import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Pet } from 'src/app/api/models';
import { PetService } from 'src/app/api/services';

@Component({
  selector: 'app-pet-list',
  templateUrl: './pet-list.component.html',
  styleUrls: ['./pet-list.component.scss']
})
export class PetListComponent implements OnInit {
  // add `pets` variable which holds the pet list
  pets$: Observable<Pet[]>;

  // add a petService parameter of type PetService to the constructor
  constructor(private petService: PetService) { }

  // update this method to get the pet list on init
  ngOnInit(): void {
    this.getPets();
  }

  // add a new function getPets to get the todo list from the service
  getPets(): void {
    this.pets$ = this.petService.findPetsByStatus({ status: ["available"] });
  }
}
