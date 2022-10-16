import { Component, OnInit } from '@angular/core';
import { FuseTranslationLoaderService } from '@fuse/services/translation-loader.service';

import { locale as english } from './i18n/en';
import { locale as turkish } from './i18n/tr';

@Component({
  selector: 'app-productsingle',
  templateUrl: './productsingleview.component.html',
  styleUrls: ['./productsingleview.component.scss']
})
export class ProductsingleviewComponent implements OnInit {
  displaymode:any;
  constructor(private fuseTranslationLoader: FuseTranslationLoaderService)
    {
        this.fuseTranslationLoader.loadTranslations(english, turkish);

    }


  ngOnInit() {
    this.displaymode = 1;
  }
 



}
