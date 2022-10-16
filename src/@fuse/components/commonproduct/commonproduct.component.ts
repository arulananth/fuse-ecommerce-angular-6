import { Component, EventEmitter, Output, OnInit ,Input } from '@angular/core';
import { Subscription,Observable ,  Observer } from 'rxjs';


import { FuseConfigService } from '@fuse/services/config.service';

@Component({
    selector   : 'commonproduct',
    templateUrl: './commonproduct.component.html',
    styleUrls  : ['./commonproduct.component.scss'],
    styles: [`
    agm-map {
      height: 300px;
    }
  `],
    
})
export class CommonproductComponent
{

     lat: number = 51.678418;
     lng: number = 7.809007;
    constructor(){}
        
  ngOnInit() {
    }

 
}
