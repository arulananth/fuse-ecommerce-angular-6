import { Component, EventEmitter, Output, OnInit ,Input } from '@angular/core';
import { Subscription,Observable ,  Observer } from 'rxjs';


import { FuseConfigService } from '@fuse/services/config.service';

@Component({
    selector   : 'productlike',
    templateUrl: './productlike.component.html',
    styleUrls  : ['./productlike.component.scss']
})
export class ProductlikeComponent
{
   
    constructor(
        private fuseConfig: FuseConfigService
    )
    {
        
    }


}
