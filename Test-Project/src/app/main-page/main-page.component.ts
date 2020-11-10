import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
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
  public objectForDropdownCart: ProductsInCart[] = [];
  public totalQuantity: number = 0;

  public productName: string;
  public productSymbol: string;
  public productPrice: string;
  public testBoolean: boolean = false;

  public imgUrl: string = "https://drive.google.com/file/d/0B8KYnbdnrRGXSXVoMzdqRWhCTXc/view?usp=sharing";

  constructor(private cartService: cartService) { }

  ngOnInit(): void {
    this.initObjectForDropdownCart();
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

  public initObjectForDropdownCart(): void {
    let sizeS = new ProductsInCart();
    sizeS.ProductSize = "S";
    sizeS.Quantity = 0;
    this.objectForDropdownCart.push(sizeS);

    let sizeM = new ProductsInCart();
    sizeM.ProductSize = "M";
    sizeM.Quantity = 0;
    this.objectForDropdownCart.push(sizeM);

    let sizeL = new ProductsInCart();
    sizeL.ProductSize = "L";
    sizeL.Quantity = 0;
    this.objectForDropdownCart.push(sizeL);
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
    for (let i = 0; i < this.objectForDropdownCart.length; i++){
      if (this.objectForDropdownCart[i].ProductSize == "S"){
        this.objectForDropdownCart[i].Quantity = this.dropDownData["S"];
      }

      if (this.objectForDropdownCart[i].ProductSize == "M"){
        this.objectForDropdownCart[i].Quantity = this.dropDownData["M"];
      }

      if (this.objectForDropdownCart[i].ProductSize == "L"){
        this.objectForDropdownCart[i].Quantity = this.dropDownData["L"];
      }
    }
  }
}
