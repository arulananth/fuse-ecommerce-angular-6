import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatProgressBarModule,MatButtonModule, MatIconModule,MatExpansionModule } from '@angular/material';
import { CommonproductComponent } from './commonproduct.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AgmCoreModule } from '@agm/core';
@NgModule({
    declarations: [
       CommonproductComponent
    ],
    imports     : [
        CommonModule,
        RouterModule,
        FlexLayoutModule,
        MatButtonModule,
        MatProgressBarModule,
        MatIconModule,
        MatExpansionModule,
        AgmCoreModule.forRoot({
          apiKey: 'AIzaSyAFgM81Qz-SwfTzUsr4F51AgDj0HdN88CQ'
        })
    ],
    exports     : [
        CommonproductComponent
    ]
})
export class CommonproductModule
{
}
