import { Component, OnInit } from '@angular/core';
import { Album } from '../album.model';
import { albumData } from '../album-data';
import { Router } from '@angular/router';

@Component({
  selector: 'app-marketplace',
  templateUrl: './marketplace.component.html',
  styleUrls: ['./marketplace.component.scss']
})
export class MarketplaceComponent implements OnInit {
  albums: Album[] = albumData;
  constructor(private router: Router) { }

  ngOnInit() {
    console.log("albums: ", this.albums);
  }

  goToDetailPage(clickedAlbum: Album) {
    this.router.navigate(['album', clickedAlbum.id]);
  }
}
