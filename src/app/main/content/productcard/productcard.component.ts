import { Component, OnInit } from '@angular/core';
import { FuseTranslationLoaderService } from '@fuse/services/translation-loader.service';

import { locale as english } from './i18n/en';
import { locale as turkish } from './i18n/tr';

@Component({
  selector: 'app-productcard',
  templateUrl: './productcard.component.html',
  styleUrls: ['./productcard.component.scss']
})
export class ProductcardComponent implements OnInit {
    displaymode:any;
    item:any;
   pageOfItems: Array<any>;
  constructor(private fuseTranslationLoader: FuseTranslationLoaderService)
    {
        this.fuseTranslationLoader.loadTranslations(english, turkish);

    }


  ngOnInit() {
    this.displaymode = 1;
  }
  
  onDisplayModeChange(mode: number): void {
      this.displaymode = mode;
  }
  items =[
    { 
    "name": "Item 1"
    },
    {
        "name": "Item 2"
    },
    {
        "name": "Item 3"
    },
    {
        "name": "Item 4"
    },
    {
        "name": "Item 5"
    },
    {
        "name": "Item 6"
    },
    {
        "name": "Item 7"
    },
    {
        "name": "Item 8"
    },
    {
        "name": "Item 9"
    },
    {
        "name": "Item 10"
    },
    {
        "name": "Item 11"
    },
    {
        "name": "Item 12"
    },
    {
        "name": "Item 13"
    },
    {
        "name": "Item 14"
    },
    {
        "name": "Item 15"
    },
    {
        "name": "Item 16"
    },
    {
        "name": "Item 17"
    },
    {
        "name": "Item 18"
    },
    {
        "name": "Item 19"
    },
    {
        "name": "Item 20"
    }
]
  onChangePage(pageOfItems: Array<any>) {
        // update current page of items
        this.pageOfItems = pageOfItems;
    }
}
