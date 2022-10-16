import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule, MatIconModule,MatExpansionModule, MatDialogModule } from '@angular/material';
import { BreadcrumbComponent } from './breadcrumb.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BreadDialogContent } from './breadcrumb.component';
@NgModule({
    declarations: [
        BreadcrumbComponent,BreadDialogContent
    ],
    imports     : [
        CommonModule,
        RouterModule,
        FlexLayoutModule,
        MatButtonModule,
        MatIconModule,
        MatExpansionModule,
        MatDialogModule
    ],
    exports     : [
        BreadcrumbComponent,BreadDialogContent
    ],
    entryComponents: [BreadcrumbComponent,BreadDialogContent]
})
export class BreadcrumbModule
{
}
