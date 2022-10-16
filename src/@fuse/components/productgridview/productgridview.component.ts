import { Component, EventEmitter, Output, OnInit ,Input } from '@angular/core';
import { Subscription,Observable ,  Observer } from 'rxjs';


import { FuseConfigService } from '@fuse/services/config.service';

@Component({
    selector   : 'productgridview',
    templateUrl: './productgridview.component.html',
    styleUrls  : ['./productgridview.component.scss']
})
export class ProductgridviewComponent
{
   
    constructor(
        private fuseConfig: FuseConfigService
    )
    {
        
    }


}
