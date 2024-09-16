// Angular import
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/theme/shared/shared.module';

// project Import
import listStyleData from 'src/fake-data/list-style-1.json';

interface person {
  number: string;
  src: string;
  name: string;
  email: string;
  country: string;
  friend: string;
  follower: string;
  status: string;
  color: string;
}

@Component({
  selector: 'app-list-style-v1',
  standalone: true,
  imports: [CommonModule, SharedModule],
  templateUrl: './list-style-v1.component.html',
  styleUrls: ['./list-style-v1.component.scss']
})
export default class ListStyleV1Component {
  // private props
  PersonList: person[] = listStyleData;
}
