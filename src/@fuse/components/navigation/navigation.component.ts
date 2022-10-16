import { Component, Input, ViewEncapsulation } from '@angular/core';
import {trigger, group,state, style, transition, animate} from '@angular/animations';
@Component({
    selector     : 'fuse-navigation',
    templateUrl  : './navigation.component.html',
    styleUrls    : ['./navigation.component.scss'],
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
    encapsulation: ViewEncapsulation.None
})
export class FuseNavigationComponent
{
    @Input() layout = 'vertical';
    @Input() navigation: any;
    menuState:string = 'out';
    menuState1:string = 'out';
    constructor()
    {

    }
    toggleMenu() 
    {

      this.menuState = this.menuState === 'out' ? 'in' : 'out';
    }
    toggleMenudrop() 
    {

      this.menuState1 = this.menuState1 === 'out' ? 'in' : 'out';
    }
}
