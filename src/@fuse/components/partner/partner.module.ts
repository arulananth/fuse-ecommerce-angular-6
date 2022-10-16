import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule, MatIconModule } from '@angular/material';
import { PartnerComponent } from './partner.component';
import { FlexLayoutModule } from '@angular/flex-layout';
@NgModule({
    declarations: [
        PartnerComponent
    ],
    imports     : [
        CommonModule,
        RouterModule,
        FlexLayoutModule,
        MatButtonModule,
        MatIconModule
    ],
    exports     : [
        PartnerComponent
    ]
})
export class PartnerModule
{
}
