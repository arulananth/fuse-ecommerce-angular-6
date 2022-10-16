import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule, MatIconModule, MatToolbarModule,MatListModule } from '@angular/material';

import { FuseSharedModule } from '@fuse/shared.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FuseFooterComponent } from 'app/main/footer/footer.component';

@NgModule({
    declarations: [
        FuseFooterComponent
    ],
    imports     : [
        RouterModule,

        MatButtonModule,
        MatIconModule,
        MatToolbarModule,
        MatListModule,
        FuseSharedModule,
        FlexLayoutModule
    ],
    exports     : [
        FuseFooterComponent
    ]
})
export class FuseFooterModule
{
}
