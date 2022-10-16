import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatListModule,MatIconModule, MatRippleModule,MatButtonModule,MatMenuModule,MatExpansionModule } from '@angular/material';

import { TranslateModule } from '@ngx-translate/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FuseNavigationComponent } from './navigation.component';
import { FuseNavVerticalItemComponent } from './vertical/nav-item/nav-vertical-item.component';
import { FuseNavVerticalCollapseComponent } from './vertical/nav-collapse/nav-vertical-collapse.component';
import { FuseNavVerticalGroupComponent } from './vertical/nav-group/nav-vertical-group.component';
import { FuseNavHorizontalItemComponent } from './horizontal/nav-item/nav-horizontal-item.component';
import { FuseNavHorizontalCollapseComponent } from './horizontal/nav-collapse/nav-horizontal-collapse.component';

@NgModule({
    imports     : [
        CommonModule,
        RouterModule,
        MatButtonModule,
        MatExpansionModule,
        MatListModule,
        MatMenuModule,
        MatIconModule,
        MatRippleModule,
        FlexLayoutModule,
        TranslateModule.forChild()
    ],
    exports     : [
        FuseNavigationComponent
    ],
    declarations: [
        FuseNavigationComponent,
        FuseNavVerticalGroupComponent,
        FuseNavVerticalItemComponent,
        FuseNavVerticalCollapseComponent,
        FuseNavHorizontalItemComponent,
        FuseNavHorizontalCollapseComponent
    ]
})
export class FuseNavigationModule
{
}
