import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonToggleModule,MatSelectModule, MatInputModule,MatGridListModule,MatButtonModule, MatIconModule, MatMenuModule, MatProgressBarModule, MatToolbarModule,MatFormFieldModule,MatTableModule } from '@angular/material';
import { BreadcrumbModule, CarttableModule,CommonproductModule,ProductgridviewModule,ProductlistviewModule } from '@fuse/components';
import { TranslateModule } from '@ngx-translate/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FuseSharedModule } from '@fuse/shared.module';
import { ProductcardComponent } from './productcard.component';
import { JwPaginationComponent } from 'jw-angular-pagination';
const routes = [
    {
        path     : 'productlist',
        component: ProductcardComponent
    }
];

@NgModule({
  
  declarations: [
    ProductcardComponent,
    JwPaginationComponent
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
        MatButtonToggleModule
  ],
  exports     : [
        ProductcardComponent
    ]
})
export class ProductcardModule { 
}

