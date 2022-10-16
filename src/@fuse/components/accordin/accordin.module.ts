import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule, MatIconModule,MatExpansionModule } from '@angular/material';
import { AccordinComponent } from './accordin.component';
import { FlexLayoutModule } from '@angular/flex-layout';
@NgModule({
    declarations: [
        AccordinComponent
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
        AccordinComponent
    ]
})
export class AccordinModule
{
}
