import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatBadgeModule,MatButtonModule, MatIconModule, MatMenuModule, MatProgressBarModule, MatToolbarModule } from '@angular/material';
import { TranslateModule } from '@ngx-translate/core';
import { FuseSharedModule } from '@fuse/shared.module';

import { FuseToolbarComponent } from 'app/main/toolbar/toolbar.component';
import { FuseSearchBarModule, FuseShortcutsModule, PartnerModule } from '@fuse/components';

@NgModule({
    declarations: [
        FuseToolbarComponent
    ],
    imports     : [
        RouterModule,
        MatBadgeModule,
        MatButtonModule,
        MatIconModule,
        MatMenuModule,
        MatProgressBarModule,
        MatToolbarModule,
       TranslateModule,
        FuseSharedModule,
        FuseSearchBarModule,
        FuseShortcutsModule,
        PartnerModule
    ],
    exports     : [
        FuseToolbarComponent
    ]
})
export class FuseToolbarModule
{
}
