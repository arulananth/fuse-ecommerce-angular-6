import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { FuseSharedModule } from '@fuse/shared.module';
import { HomeComponent } from './home.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatPaginatorModule} from '@angular/material/paginator';

import { FuseSearchBarModule, FuseShortcutsModule, CarouselModule,PartnerModule,ProductModule,AccordinModule,SearchModule,CommonproductModule } from '@fuse/components';
const routes = [
    {
        path     : 'home',
        component: HomeComponent
    }
];

@NgModule({
    declarations: [
        HomeComponent
    ],
    imports     : [
        RouterModule.forChild(routes),

        TranslateModule,
        PartnerModule,
        ProductModule,
        AccordinModule,
        SearchModule,
        CarouselModule,
        FuseSharedModule,
        MatCardModule,
        MatIconModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatPaginatorModule,
        CommonproductModule
    ],
    exports     : [
        HomeComponent
    ]
})

export class HomeModule
{
}
