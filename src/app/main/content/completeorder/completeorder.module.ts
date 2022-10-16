import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { BreadcrumbModule, CarttableModule,OrderModule,OrderCompleteModule } from '@fuse/components';
import { FuseSharedModule } from '@fuse/shared.module';
import { CompleteorderComponent } from './completeorder.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
const routes = [
    {
        path     : 'completeorder',
        component: CompleteorderComponent
    }
];

@NgModule({
    declarations: [
        CompleteorderComponent
    ],
    imports     : [
        RouterModule.forChild(routes),

        TranslateModule,
        BreadcrumbModule, CarttableModule,OrderModule,OrderCompleteModule,
        FuseSharedModule,
        MatCardModule,
        MatIconModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
    ],
    exports     : [
        CompleteorderComponent
    ]
})

export class CompleteorderModule
{
}
