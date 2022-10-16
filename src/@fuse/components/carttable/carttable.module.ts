import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatDialogModule,MatInputModule,MatSelectModule,MatFormFieldModule,MatButtonModule, MatIconModule,MatExpansionModule,MatTableModule} from '@angular/material';
import { CarttableComponent } from './carttable.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CarttableDialogContent } from './carttable.component';
@NgModule({
    declarations: [
        CarttableComponent, CarttableDialogContent
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
        MatDialogModule,
        MatTableModule
    ],
    exports     : [
        CarttableComponent, CarttableDialogContent
    ],
     entryComponents: [CarttableComponent, CarttableDialogContent]
})
export class CarttableModule
{
}
