import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatInputModule,MatSelectModule,MatFormFieldModule,MatButtonModule, MatIconModule,MatExpansionModule } from '@angular/material';
import { OrdercompleteComponent } from './ordercomplete.component';
import { FlexLayoutModule } from '@angular/flex-layout';
@NgModule({
    declarations: [
        OrdercompleteComponent
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
        OrdercompleteComponent
    ]
})
export class OrderCompleteModule
{
}
