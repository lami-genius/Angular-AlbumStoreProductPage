import {Http, Response} from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import {map} from 'rxjs/operators';
import { Album } from './album';
import { Product } from './product';

@Injectable()
export class ProductService {

  // class attributes
  private _albumUrl: string = '../assets/album.json';    // assets data repo
  private _productsUrl: string = '../assets/products.json';    // products data repo

  constructor(private _http: Http) { }

  // backend CRUD
  // R
  getAlbum(id: number): Observable<Album>{
    return this._http.get(this._albumUrl).map(response => <Album>response.json());
  }

  getProducts(): Observable<Product[]>{
    return this._http.get(this._productsUrl).map(response => <Product[]>response.json());
  }

}
