import { Component, OnInit } from '@angular/core';
import { FuseTranslationLoaderService } from '@fuse/services/translation-loader.service';

import { locale as english } from './i18n/en';
import { locale as turkish } from './i18n/tr';
export interface Transaction {
  item: string;
  cost: number;
}
export interface PeriodicElement {
  position: number;
  symbol: string;
  symbol1: string;
  symbol2: string;
  symbol3: string;
  symbol4: string;
  symbol5: string;
  symbol6: string;
  
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, 
   symbol :'loreum ipsum',
   symbol1 :'loreum ipsum',
   symbol2 :'loreum ipsum',
   symbol3:'loreum ipsum',
   symbol4 :'loreum ipsum',
   symbol5 :'loreum ipsum',
   symbol6 :'loreum ipsum',
   
  },
  {position: 2, 
   symbol :'loreum ipsum',
   symbol1 :'loreum ipsum',
   symbol2 :'loreum ipsum',
   symbol3:'loreum ipsum',
   symbol4 :'loreum ipsum',
   symbol5 :'loreum ipsum',
   symbol6 :'loreum ipsum',
   
  },
  
];
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
 displayedColumns: string[] = ['position', 'symbol', 'symbol1', 'symbol2', 'symbol3','symbol4' , 'symbol5','symbol6'];
  dataSource = ELEMENT_DATA;3
  constructor(private fuseTranslationLoader: FuseTranslationLoaderService)
    {
        this.fuseTranslationLoader.loadTranslations(english, turkish);
    }

  ngOnInit() {
  }
  
  transactions: Transaction[] = [
    {item: 'Beach ball', cost: 4},
    {item: 'Towel', cost: 5},
    {item: 'Frisbee', cost: 2},
    {item: 'Sunscreen', cost: 4},
    {item: 'Cooler', cost: 25},
    {item: 'Swim suit', cost: 15},
  ];

  /** Gets the total cost of all transactions. */
  getTotalCost() {
    return this.transactions.map(t => t.cost).reduce((acc, value) => acc + value, 0);
  }
}
