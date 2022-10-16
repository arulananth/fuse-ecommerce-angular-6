import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule, MatIconModule } from '@angular/material';
import { ProductlikeComponent } from './productlike.component';
import { FlexLayoutModule } from '@angular/flex-layout';
@NgModule({
    declarations: [
        ProductlikeComponent
    ],
    imports     : [
        CommonModule,
        RouterModule,
        FlexLayoutModule,
        MatButtonModule,
        MatIconModule
    ],
    exports     : [
        ProductlikeComponent
    ]
})
export class ProductlikeModule
{
}
