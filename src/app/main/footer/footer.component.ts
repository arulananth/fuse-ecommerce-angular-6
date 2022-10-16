import { Component } from '@angular/core';
import {trigger, group,state, style, transition, animate} from '@angular/animations';

@Component({
    selector   : 'fuse-footer',
    templateUrl: './footer.component.html',
    styleUrls  : ['./footer.component.scss'],
    animations: [
    trigger('slideInOut', [
        state('in', style({
            'max-height': '500px', 'opacity': '1', 'display': 'block'
        })),
        state('out', style({
            'max-height': '0px', 'opacity': '0', 'display': 'none'
        })),
        transition('in => out', [group([
            animate('700ms ease-in-out', style({
                'opacity': '0'
            })),
            animate('600ms ease-in-out', style({
                'max-height': '0px'
            })),
            animate('700ms ease-in-out', style({
                'display': 'none'
            }))
        ]
        )]),
        transition('out => in', [group([
            animate('1ms ease-in-out', style({
                'display': 'block'
            })),
            animate('600ms ease-in-out', style({
                'max-height': '500px'
            })),
            animate('800ms ease-in-out', style({
                'opacity': '1'
            }))
        ]
        )])
    ]),
  ],
})
export class FuseFooterComponent
{
   footmenu:any;
    constructor()
    {
    	this.footmenu = [
            {
                'url'   : 'en',
                'title': 'Loreum Ipsum',
                'icons' : 'location_on'
            },
            {
                'url'   : 'tr',
                'title': 'Loreum Ipsum',
                'icons' : 'location_on'
            },

            {
                'url'   : 'tr',
                'title': 'Loreum Ipsum',
                'icons' : 'location_on'
            },
            {
                'url'   : 'tr',
                'title': 'Loreum Ipsum',
                'icons' : 'phone'
            },
            {
                'url'   : 'tr',
                'title': 'Loreum Ipsum',
                'icons' : 'mail_outline'
            }
        ];
    }

    footmenuState:string = 'out';
    menuState1:string = 'out';
 
    toggleFootMenu() 
    {

      this.footmenuState = this.footmenuState === 'out' ? 'in' : 'out';
    }
    toggleMenudrop() 
    {

      this.menuState1 = this.menuState1 === 'out' ? 'in' : 'out';
    }
}
