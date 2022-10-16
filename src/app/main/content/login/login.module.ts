import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatCardModule,MatSelectModule, MatInputModule,MatGridListModule,MatButtonModule, MatIconModule, MatMenuModule, MatProgressBarModule, MatToolbarModule,MatFormFieldModule,MatTableModule,MatStepperModule } from '@angular/material';
import { BreadcrumbModule, CarttableModule } from '@fuse/components';
import { TranslateModule } from '@ngx-translate/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FuseSharedModule } from '@fuse/shared.module';
import { LoginComponent } from './login.component';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
const routes = [
    {
        path     : 'login',
        component: LoginComponent
    }
];

@NgModule({
  
  declarations: [
    LoginComponent
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
        MatStepperModule,
        MatCardModule,
        TranslateModule,
        MatFormFieldModule,
        FuseSharedModule,
        BreadcrumbModule,
        CarttableModule
  ],
  exports     : [
        LoginComponent
    ]
})
export class LoginModule { 
}

