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
  constructor() { }

  ngOnInit(): void {
    this.productName = "Classic Tee";
    this.productSymbol = "$";
    this.productPrice = "75.00";
    this.productDestription = "Dolor sit amet, consectetur adipiscing elit. Haec et tu ita posuisti, et verba vestra sunt. Quod autem ratione actum est, id officium appellamus dolor sit amet, consectetur adipiscing elit. Haec et tu ita posuisti, et verba vestra sunt. Quod autem ratione actum est, id officium appellamus";
  }

}
