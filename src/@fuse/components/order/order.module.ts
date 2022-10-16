import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule, MatIconModule,MatExpansionModule } from '@angular/material';
import { OrderComponent } from './order.component';
import { FlexLayoutModule } from '@angular/flex-layout';
@NgModule({
    declarations: [
        OrderComponent
    ],
    imports     : [
        CommonModule,
        RouterModule,
        FlexLayoutModule,
        MatButtonModule,
        MatIconModule,
        MatExpansionModule
    ],
    exports     : [
        OrderComponent
    ]
})
export class OrderModule
{
}
