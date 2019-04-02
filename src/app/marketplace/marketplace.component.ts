import { Component, OnInit } from '@angular/core';
import { Album } from '../album.model';
import { albumData } from '../album-data';

@Component({
  selector: 'app-marketplace',
  templateUrl: './marketplace.component.html',
  styleUrls: ['./marketplace.component.scss']
})
export class MarketplaceComponent implements OnInit {
  albums: Album[] = albumData;
  constructor() { }

  ngOnInit() {
    console.log("albums: ", this.albums);
  }

}
