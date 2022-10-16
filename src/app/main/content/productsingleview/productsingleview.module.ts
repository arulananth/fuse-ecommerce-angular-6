import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatDialogModule,MatButtonToggleModule,MatSelectModule, MatInputModule,MatGridListModule,MatButtonModule, MatIconModule, MatMenuModule, MatProgressBarModule, MatToolbarModule,MatFormFieldModule,MatTableModule } from '@angular/material';
import { ProductlikeModule,ProductsingleModule,BreadcrumbModule, CarttableModule,CommonproductModule,ProductgridviewModule,ProductlistviewModule } from '@fuse/components';
import { TranslateModule } from '@ngx-translate/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FuseSharedModule } from '@fuse/shared.module';
import { ProductsingleviewComponent } from './productsingleview.component';

const routes = [
    {
        path     : 'productsingle',
        component: ProductsingleviewComponent
    }
];

@NgModule({
  
  declarations: [
    ProductsingleviewComponent
  ],
  imports: [
        RouterModule.forChild(routes),
        MDBBootstrapModule.forRoot(),
        NgbModule.forRoot(),
        MatButtonModule,
        MatIconModule,
        MatMenuModule,
        MatProgressBarModule,
        MatToolbarModule,
        MatTableModule,
        MatGridListModule,
        MatTableModule,
        MatInputModule,
        MatSelectModule,
        TranslateModule,
        MatFormFieldModule,
        FuseSharedModule,
        BreadcrumbModule,
        CarttableModule,
        CommonproductModule,
        ProductgridviewModule,
        ProductlistviewModule,
        MatButtonToggleModule,
        ProductsingleModule,
        ProductlikeModule,
        MatDialogModule
  ],
  exports     : [
        ProductsingleviewComponent
    ]
})
export class ProductsingleviewModule { 
}

