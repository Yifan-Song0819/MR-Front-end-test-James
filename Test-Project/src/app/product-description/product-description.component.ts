import { summaryForJitName } from '@angular/compiler/src/aot/util';
import { Component, OnInit } from '@angular/core';

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
                                            "L": 0
                                           };

  constructor() { }

  ngOnInit(): void {
    this.productName = "Classic Tee";
    this.productSymbol = "$";
    this.productPrice = "75.00";
    this.productDestription = "Dolor sit amet, consectetur adipiscing elit. Haec et tu ita posuisti, et verba vestra sunt. Quod autem ratione actum est, id officium appellamus dolor sit amet, consectetur adipiscing elit. Haec et tu ita posuisti, et verba vestra sunt. Quod autem ratione actum est, id officium appellamus";
  }

  public pickSize(pickedSize: string): void {
    pickedSize != this.currentSize ? this.currentSize = pickedSize : this.currentSize = "";
  }

  public addToCart(): void {
    if (this.currentSize == ""){
      alert("Please choose the size first.");
    }else{

    }
  }

  public test(): void {
    for (let i = 0; i<3; i++){
      console.log();
    }
  }
}
