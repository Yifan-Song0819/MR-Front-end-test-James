import { Component, OnInit } from '@angular/core';
import { cartService } from '../services/cartService';
import { ProductsInCart } from './productsInCart';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  public dropDownData: any;
  public objectForDropdownCart: any[] = [];
  public totalQuantity: number = 0;

  public productName: string;
  public productSymbol: string;
  public productPrice: string;

  constructor(private cartService: cartService) { }

  ngOnInit(): void {
    this.cartService.cartStatus.subscribe(value => {
        this.dropDownData = value;
        console.log(this.dropDownData);
        if (this.dropDownData != null){
          this.initProductDetails();
          this.transferDataToDropdownCart();
        }
      }
    );
  }

  public mainTest(): void {
    console.log(this.objectForDropdownCart);
  }

  public initProductDetails(): void {
    this.productName = this.dropDownData["productName"];
    this.productSymbol = this.dropDownData["productSymbol"];
    this.productPrice = this.dropDownData["productPrice"];
  }

  public transferDataToDropdownCart(): void {
    
  }
}
