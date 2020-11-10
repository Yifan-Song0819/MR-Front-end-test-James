import { Component, OnInit } from '@angular/core';
import { cartService } from '../services/cartService';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  public dropDownData: any;
  public objectForDropdownCart: any = [];
  constructor(private cartService: cartService) { }

  ngOnInit(): void {
    this.cartService.cartStatus.subscribe(value => {
        this.dropDownData = value;
        console.log(this.dropDownData);

      }
    );
  }

  public mainTest(): void {
    
  }

}
