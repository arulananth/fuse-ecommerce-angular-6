import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatExpansionModule,MatDialogModule,MatButtonModule, MatIconModule,MatTabsModule,MatInputModule,MatSelectModule,MatFormFieldModule } from '@angular/material';
import { ProductsingleComponent } from './productsingle.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxGalleryModule } from 'ngx-gallery';
import { CartDialogContent } from './productsingle.component';
@NgModule({
    declarations: [
        ProductsingleComponent,CartDialogContent
    ],
    imports     : [
        CommonModule,
        RouterModule,
        FlexLayoutModule,
        MatButtonModule,
        MatIconModule,
        NgxGalleryModule,
        MatExpansionModule,
        MatTabsModule,
        MatInputModule,MatSelectModule,MatFormFieldModule,MatDialogModule,
    ],
    exports     : [
       ProductsingleComponent,CartDialogContent
    ],
   entryComponents: [ProductsingleComponent,CartDialogContent]
})
export class ProductsingleModule
{
}
