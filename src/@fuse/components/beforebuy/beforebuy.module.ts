import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatInputModule,MatSelectModule,MatFormFieldModule,MatButtonModule, MatIconModule,MatExpansionModule } from '@angular/material';
import { BeforebuyComponent } from './beforebuy.component';
import { FlexLayoutModule } from '@angular/flex-layout';
@NgModule({
    declarations: [
        BeforebuyComponent
    ],
    imports     : [
        CommonModule,
        RouterModule,
        FlexLayoutModule,
        MatButtonModule,
        MatIconModule,
        MatExpansionModule,
        MatSelectModule,
        MatFormFieldModule,
        MatInputModule,
    ],
    exports     : [
        BeforebuyComponent
    ]
})
export class BeforebuyModule
{
}
