import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule, MatIconModule } from '@angular/material';
import { ProductlistviewComponent } from './productlistview.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
    declarations: [
        ProductlistviewComponent,
      
    ],
    imports     : [
        CommonModule,
        RouterModule,
        FlexLayoutModule,
        MatButtonModule,
        MatIconModule,

    ],
    exports     : [
        ProductlistviewComponent
    ]
})
export class ProductlistviewModule
{
}
