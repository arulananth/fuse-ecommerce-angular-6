import { Component, EventEmitter, Output, OnInit ,Input } from '@angular/core';
import { Subscription,Observable ,  Observer } from 'rxjs';
import { FuseConfigService } from '@fuse/services/config.service';

@Component({
    selector   : 'productlistview',
    templateUrl: './productlistview.component.html',
    styleUrls  : ['./productlistview.component.scss']
})
export class ProductlistviewComponent
{
 
    constructor(
        private fuseConfig: FuseConfigService
    )
    {
       
    }

 
  
}
