import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule, MatIconModule } from '@angular/material';
import { ProductComponent } from './product.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
    declarations: [
        ProductComponent
    ],
    imports     : [
        CommonModule,
        RouterModule,
        FlexLayoutModule,
        MatButtonModule,
        MatIconModule,

    ],
    exports     : [
        ProductComponent
    ]
})
export class ProductModule
{
}
