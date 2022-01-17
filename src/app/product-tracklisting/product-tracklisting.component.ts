import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Album } from '../album';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-tracklisting',
  templateUrl: './product-tracklisting.component.html',
  styleUrls: ['./product-tracklisting.component.css']
})
export class ProductTracklistingComponent implements OnInit {
  albumInfo: Album;
  id: number;

  constructor(private _productService: ProductService, private route: ActivatedRoute){};

  ngOnInit() {
    this.route.queryParams.subscribe(
      params => {
      this.id = params.id; // get params id
      this._productService.getAlbum(this.id).subscribe(response => this.albumInfo = response); // query actual data
    }
    );
  }

}
