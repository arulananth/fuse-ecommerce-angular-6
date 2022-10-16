import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatSelectModule, MatInputModule,MatGridListModule,MatButtonModule, MatIconModule, MatMenuModule, MatProgressBarModule, MatToolbarModule,MatFormFieldModule,MatTableModule } from '@angular/material';
import { BreadcrumbModule, CarttableModule, BeforebuyModule } from '@fuse/components';
import { TranslateModule } from '@ngx-translate/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FuseSharedModule } from '@fuse/shared.module';
import { CartbeforeComponent } from './cartbefore.component';

const routes = [
    {
        path     : 'cartbefore',
        component: CartbeforeComponent
    }
];

@NgModule({
  
  declarations: [
    CartbeforeComponent
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
        BeforebuyModule
  ],
  exports     : [
        CartbeforeComponent
    ]
})
export class CartbeforeModule { 
}

