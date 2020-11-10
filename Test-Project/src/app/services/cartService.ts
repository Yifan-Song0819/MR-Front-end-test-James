import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';


export class cartService implements OnInit {
  
  public cartStatus = new BehaviorSubject<any>(null);
  public currentCartStatus: Observable<any>;
  
  constructor() { }

  ngOnInit(): void {

  }
}
