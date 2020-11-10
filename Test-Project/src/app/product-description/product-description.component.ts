import { summaryForJitName } from '@angular/compiler/src/aot/util';
import { Component, OnInit } from '@angular/core';
import { cartService } from '../services/cartService';

@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.css']
})
export class ProductDescriptionComponent implements OnInit {
  public productName: string;
  public productSymbol: string;
  public productPrice: string;
  public productDestription: string;

  public currentSize: string = "";
  public totalProductsAndQuantities: any = {
                                            "S": 0, 
                                            "M": 0, 
                                            "L": 0,
                                            "productName": "",
                                            "productSymbol": "",
                                            "productPrice": ""
                                           };
  
  constructor(private cartService: cartService) { }

  ngOnInit(): void {
    this.productName = "Classic Tee";
    this.productSymbol = "$";
    this.productPrice = "75.00";
    this.productDestription = "Dolor sit amet, consectetur adipiscing elit. Haec et tu ita posuisti, et verba vestra sunt. Quod autem ratione actum est, id officium appellamus dolor sit amet, consectetur adipiscing elit. Haec et tu ita posuisti, et verba vestra sunt. Quod autem ratione actum est, id officium appellamus";
    this.initDataToTotalObject();
  }

  public initDataToTotalObject(): void {
    this.totalProductsAndQuantities["productName"] = this.productName;
    this.totalProductsAndQuantities["productSymbol"] = this.productSymbol;
    this.totalProductsAndQuantities["productPrice"] = this.productPrice;
  }

  public pickSize(pickedSize: string): void {
    pickedSize != this.currentSize ? this.currentSize = pickedSize : this.currentSize = "";
  }

  public addToCart(): void {
    if (this.currentSize == ""){
      alert("Please choose the size first.");
    }else{
      this.increaseQuantityOfPickedSize();
      this.cartService.cartStatus.next(this.totalProductsAndQuantities);
    }
  }

  public test(): void {
    console.log(this.totalProductsAndQuantities);
  }

  public increaseQuantityOfPickedSize(): void {
    if (this.currentSize == "S"){
      this.totalProductsAndQuantities["S"] += 1;
    }else if (this.currentSize == "M"){
      this.totalProductsAndQuantities["M"] += 1;
    }else{
      this.totalProductsAndQuantities["L"] += 1;
    }
  }
}
