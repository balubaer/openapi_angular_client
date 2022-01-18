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
  newhidden = true;

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
      photoUrls: ['https://littlestpetshop.hasbro.com/pet-tracker/img/pets/2018/2-74.png']
    };
    this.subscriptions.add(this.petService.addPet({ body: newPet }).subscribe());
    this.newhidden = false;

    setTimeout(() => {
      this.router.navigateByUrl('/pets');
    }
      , 1000);
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

}
