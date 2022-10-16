import { Component } from '@angular/core';

import { FuseTranslationLoaderService } from '@fuse/services/translation-loader.service';

import { locale as english } from './i18n/en';
import { locale as turkish } from './i18n/tr';

@Component({
    selector   : 'fuse-home',
    templateUrl: './home.component.html',
    styleUrls  : ['./home.component.scss']
})
export class HomeComponent
{

    constructor(private fuseTranslationLoader: FuseTranslationLoaderService)
    {
        this.fuseTranslationLoader.loadTranslations(english, turkish);
    }

    public dashCard = [
        { pname: 'Diyo Shop', ppercent: '10%'},
        { pname: 'Diyo Shop', ppercent: '10%'},
        { pname: 'Diyo Shop', ppercent: '10%'},
        
       
    ];


}
