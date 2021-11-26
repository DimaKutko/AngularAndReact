import { Component, OnInit } from '@angular/core';
import { IArt } from 'src/app/interfaces/art';
import { IAuthor } from 'src/app/interfaces/author';
import { ArtService } from 'src/app/serivces/art.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  myGallery!: IAuthor[];
  currentAuthor!: IAuthor;
  currentArt!: IArt;

  constructor(private service: ArtService) { }

  ngOnInit(): void {
    this.myGallery = this.service.getGallery();

    this.currentAuthor = this.myGallery[0];
    this.currentArt = this.currentAuthor.arts[0];
  }

  setCurrentArt(idAuthor:string, idArt:string){
    this.currentAuthor = this.myGallery.find(e => e.id == idAuthor)!;
    this.currentArt = this.currentAuthor.arts.find(e => e.id == idArt)!;
  }
}
