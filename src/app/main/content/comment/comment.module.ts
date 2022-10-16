import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatDialogModule,MatSelectModule, MatInputModule,MatGridListModule,MatButtonModule, MatIconModule, MatMenuModule, MatProgressBarModule, MatToolbarModule,MatFormFieldModule,MatTableModule } from '@angular/material';
import { BreadcrumbModule, CarttableModule } from '@fuse/components';
import { TranslateModule } from '@ngx-translate/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FuseSharedModule } from '@fuse/shared.module';
import { CommentComponent } from './comment.component';
import { DialogContent } from './comment.component';

const routes = [
    {
        path     : 'comment',
        component: CommentComponent
    }
];

@NgModule({
  
  declarations: [
    CommentComponent,DialogContent
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
        MatDialogModule,

  ],
  exports     : [
        CommentComponent,DialogContent
    ],
   entryComponents: [CommentComponent,DialogContent]
})
export class CommentModule { 
}

