// Angular Import
import { Component } from '@angular/core';

// Project Import
import imageData from 'src/fake-data/card-image.json';

interface images {
  src: string;
}

@Component({
  selector: 'app-social-gallery',
  templateUrl: './social-gallery.component.html',
  styleUrls: ['./social-gallery.component.scss']
})
export class SocialGalleryComponent {
  // public props
  imageList: images[] = imageData;
}
