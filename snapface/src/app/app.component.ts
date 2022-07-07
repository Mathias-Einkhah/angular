import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './models/face-snap.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  faceSnaps!: FaceSnap[];

  ngOnInit() {

    this.faceSnaps = [
      {
        title: 'Archibald',
        description: 'Mon meilleur ami depuis tout petit',
        imageUrl: 'https://caricom.org/wp-content/uploads/Floyd-Morris-Remake-1024x879-1.jpg',
        createdDate: new Date(),
        snaps: 0,
      },

      {
        title: 'TSE',
        description: 'Ecole d\'ingénieur',
        imageUrl: 'https://www.univ-st-etienne.fr/_richText-file/ametys-internal%253Asites/ujm/ametys-internal%253Acontents/telecom-saint-etienne/_attribute/presentation/_data/telecom_st_etienne-1030x360_288x812.jpg',
        createdDate: new Date(),
        snaps: 0,
        location: 'Saint-Etienne'
      }

      
    ];
  }
}
