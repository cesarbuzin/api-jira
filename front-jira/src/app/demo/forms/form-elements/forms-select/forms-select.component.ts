// angular import
import { Component, ElementRef, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DataService, Person } from './data.service';
import { map } from 'rxjs/operators';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// bootstrap
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

// project import
import { SharedModule } from 'src/app/theme/shared/shared.module';

// third party
import { NgSelectModule } from '@ng-select/ng-select';
import { TagInputModule } from 'ngx-chips';

@Component({
  selector: 'app-frm-select',
  standalone: true,
  imports: [CommonModule, SharedModule, NgSelectModule, HttpClientModule, TagInputModule],
  templateUrl: './forms-select.component.html',
  styleUrls: ['./forms-select.component.scss']
})
export default class FrmSelectComponent implements OnInit {
  // public props
  people: Person[] = [];
  selectedPeople1 = [];
  people$: Observable<Person[]> | undefined;
  selectedPeople = [{ name: 'Karyn Wright' }];
  selectedPeople2 = [];
  githubUsers$!: Observable<object>;
  selectedUsers = ['anjmao'];
  heroForm!: FormGroup;
  ages = [
    { value: '<18', label: 'Under 18' },
    { value: '18', label: '18' },
    { value: '>18', label: 'More than 18' }
  ];

  customForm!: FormGroup;
  photos = [];

  // constructor
  constructor(private dataService: DataService, private fb: FormBuilder, private modalService: NgbModal) {}

  // life cycle event
  ngOnInit() {
    this.people$ = this.dataService.getPeople();
    this.githubUsers$ = this.dataService.getGithubAccounts('anjm');
    this.dataService
      .getPeople()
      .pipe(map((x) => x.filter((y) => !y.disabled)))
      .subscribe((res) => {
        this.people = res;
      });

    this.heroForm = this.fb.group({
      age: [null, Validators.required]
    });
    this.loadPhotos();
    this.customForm = this.fb.group({
      photo: ''
    });
  }

  // public method
  clearModel() {
    this.selectedPeople = [];
  }

  changeModel() {
    this.selectedPeople = [{ name: 'New person' }];
  }

  clearModel1() {
    this.selectedPeople2 = [];
  }

  showConfirm(content: ElementRef) {
    this.modalService.open(content);
  }

  selectFirstPhoto() {
    this.customForm.get('photo')?.patchValue(this.photos[0]);
  }

  openModal(content: ElementRef) {
    this.modalService.open(content);
  }

  changePhoto(photo: { thumbnailUrl: ElementRef }) {
    this.customForm.get('photo')?.patchValue(photo ? photo.thumbnailUrl : null);
  }

  togglePhotoDisabled() {
    const photo = this.customForm.get('photo');
    if (photo?.disabled) {
      photo?.enable();
    } else {
      photo?.disable();
    }
  }

  // private method
  private loadPhotos() {
    this.dataService.getPhotos().subscribe((photos) => {
      this.photos = photos;
      this.selectFirstPhoto();
    });
  }

  autocompleteItems = ['Alabama', 'Wyoming', 'Henry Die', 'John Doe'];
  autocompleteItemsAsObjects = [
    { value: 'Alabama', id: 0 },
    { value: 'Wyoming', id: 1 },
    { value: 'Coming', id: 2 },
    { value: 'Josephin Doe', id: 3 },
    { value: 'Henry Die', id: 4 },
    { value: 'Lary Doe', id: 5 },
    { value: 'Alice', id: 6 },
    { value: 'Alia', id: 7 },
    { value: 'Suzen', id: 8 },
    { value: 'Michael Scofield', id: 9 },
    { value: 'Irina Shayk', id: 10 },
    { value: 'Sara Tancredi', id: 11 },
    { value: 'Daizy Mendize', id: 12 },
    { value: 'Loren Scofield', id: 13 },
    { value: 'Shayk', id: 14 },
    { value: 'Sara', id: 15 },
    { value: 'Doe', id: 16 },
    { value: 'Lary', id: 17 },
    { value: 'Roni Sommerfield', id: 18 },
    { value: 'Mickey Amavisca', id: 19 },
    { value: 'Dorethea Hennigan', id: 20 },
    { value: 'Marisha Haughey', id: 21 },
    { value: 'Justin Czajkowski', id: 22 },
    { value: 'Reyes Hodges', id: 23 },
    { value: 'Vicky Hadley', id: 24 },
    { value: 'Lezlie Baumert', id: 25 },
    { value: 'Otha Vanorden', id: 26 },
    { value: 'Glayds Inabinet', id: 27 },
    { value: 'Hang Owsley', id: 28 },
    { value: 'Carlotta Buttner', id: 29 },
    { value: 'Randa Vanloan', id: 30 },
    { value: 'Elana Fulk', id: 31 },
    { value: 'Amos Spearman', id: 32 },
    { value: 'Samon', id: 33 },
    { value: 'John Doe', id: 34 }
  ];
}
