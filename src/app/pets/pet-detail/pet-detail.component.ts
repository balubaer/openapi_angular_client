import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Pet } from 'src/app/api/models';
import { PetService } from 'src/app/api/services';

@Component({
  selector: 'app-pet-detail',
  templateUrl: './pet-detail.component.html',
  styleUrls: ['./pet-detail.component.scss']
})
export class PetDetailComponent implements OnInit {
  public pet$: Observable<Pet>;
  public urls: Array<String>;
  public petId: number;
  newhidden = true;

  private readonly subs = new Subscription();

  constructor(private route: ActivatedRoute, private petService: PetService, private router: Router) { }

  ngOnInit(): void {
    this.subs.add(
      this.route.params.subscribe((params: { petId: number }) => {
        console.log('params:', params);
        //this.pet$ = this.petService.getPetById$Json$Response(params);
        this.pet$ = this.petService.getPetById(params);
        this.subs.add(
          this.pet$.subscribe(pet => {
            this.urls = pet.photoUrls;
            this.petId = pet.id;
          }));
      })
    );

    //  let params = this.route.params;
    // this.pet$ = this.petService.getPetById$Json(this.route.params);
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  onDelete(): void {
    console.log('onDelete');
    this.subs.add(this.petService.deletePet({ api_key: 'special-key', petId: this.petId }).subscribe(x=>{}));
    this.newhidden = false;

    setTimeout(() => {
      this.router.navigateByUrl('/pets');
    }
      , 1000);  }
}
