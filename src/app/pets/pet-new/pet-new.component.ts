import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Pet } from 'src/app/api/models';
import { PetService } from 'src/app/api/services';

@Component({
  selector: 'app-pet-new',
  templateUrl: './pet-new.component.html',
  styleUrls: ['./pet-new.component.scss']
})
export class PetNewComponent implements OnInit, OnDestroy {

  form: FormGroup;
  private readonly subscriptions = new Subscription();

  constructor(private fb: FormBuilder, private petService: PetService, private router: Router) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', [Validators.required]]
    });

    this.subscriptions.add(this.form.valueChanges.subscribe(console.log));
    this.subscriptions.add(this.form.statusChanges.subscribe(console.log));
  }

  onSubmit() {
    const newPet: Pet = {
      name: this.form.value.name,
      photoUrls: []
    };
    this.subscriptions.add(this.petService.addPet$Json({ body: newPet }).subscribe());
    this.router.navigateByUrl('/pets');
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

}
