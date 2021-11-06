import {Http, Response} from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import 'rxjs/add/operator/map';
import {map} from 'rxjs/operators';

@Injectable()
export class ProductService {

  // class attributes
  private _albumUrl: string = '../assets/album.json';    // data repo

  constructor(private _http: Http) { }

  // backend CRUD
  // R
  getAlbum(id: number){
    return this._http.get(this._albumUrl).pipe(map(response => response.json()));
  }

}
