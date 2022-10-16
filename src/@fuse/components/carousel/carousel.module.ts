import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule, MatIconModule,MatExpansionModule,MatFormFieldModule,MatInputModule } from '@angular/material';
import { CarouselComponent } from './carousel.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
@NgModule({
    declarations: [
        CarouselComponent
    ],
    imports     : [
        CommonModule,
        RouterModule,
        FlexLayoutModule,
        MatButtonModule,
        MatIconModule,
        MatExpansionModule,
        MatInputModule,
        MatFormFieldModule,
        MDBBootstrapModule
    ],
    exports     : [
        CarouselComponent
    ]
})
export class CarouselModule
{
}
