import { Injectable } from '@angular/core';
import {environment} from '../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ImageService {

  res:any;
  private query: string;
  private API_KEY: string= environment.PIXABAY_API_KEY;
  private API_URL: string= environment.PIXABAY_API_URL;
  private URL: string=this.API_URL + this.API_KEY + '&q=';
  private CURL: string =this.API_URL + this.API_KEY + '&category=';

  constructor(private _http: HttpClient ) { }

  getImage(query){
    
    return this._http.get(this.URL + query).pipe(map( res =>  this.res  = res )) ;

  }

  getImageByCategory(query){
    
    return this._http.get(this.CURL + query).pipe(map( res =>  this.res  = res )) ;

  }
}
