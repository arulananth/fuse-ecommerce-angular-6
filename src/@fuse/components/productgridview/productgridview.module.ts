import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule, MatIconModule } from '@angular/material';
import { ProductgridviewComponent } from './productgridview.component';
import { FlexLayoutModule } from '@angular/flex-layout';
@NgModule({
    declarations: [
        ProductgridviewComponent
    ],
    imports     : [
        CommonModule,
        RouterModule,
        FlexLayoutModule,
        MatButtonModule,
        MatIconModule
    ],
    exports     : [
        ProductgridviewComponent
    ]
})
export class ProductgridviewModule
{
}
