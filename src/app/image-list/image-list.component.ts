import { Component, OnInit } from '@angular/core';
import { ImageService } from '../image.service';

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.scss']
})
export class ImageListComponent implements OnInit {

  query:string;
  catQuery:string
  images: any[];
  imagesFound: boolean=false;
  searching: boolean=false;

  constructor(private imgService: ImageService) { }

  ngOnInit(): void {
  }

  handleSuccess(data){
    this.imagesFound=true;
    this.images=data.hits;
    console.log(data.hits);
    if (this.images.length==0){
      console.log('No results found')
    }
    document.getElementById("target").scrollIntoView();
  }

  handleError(error){
    console.log(error);
  }

  searchCategory(catQuery){
    this.searching=true;
    return this.imgService.getImageByCategory(catQuery).subscribe(
      data => this.handleSuccess(data),
      error=> this.handleError(error),
      ()=> this.searching=false
    )
  }

  searchImages(query){
    this.searching=true;
    return this.imgService.getImage(query).subscribe(
      data => this.handleSuccess(data),
      error=> this.handleError(error),
      ()=> this.searching=false
    )
    

  }

  save(query) {
    this.searching=true;
    return this.imgService.getImage(query).subscribe(
      data => this.handleSuccess(data),
      error=> this.handleError(error),
      ()=> this.searching=false
    )
    }

    scroll(el: HTMLElement) {
      el.scrollIntoView();
  }

}
