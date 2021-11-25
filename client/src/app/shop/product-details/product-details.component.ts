import { IProduct } from 'src/app/shared/models/product';
import { ShopService } from './../shop.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  product: any;

  constructor(private shopService: ShopService) { }

  ngOnInit(): void {
    this.loadProduct();
  }

  loadProduct() {
    this.shopService.getProduct(1).subscribe(product => {
      this.product = product;
    }, error => {
      console.log(error);
    });
  }

}
