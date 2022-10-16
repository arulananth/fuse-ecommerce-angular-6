import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import 'hammerjs';
import {MatDialogModule} from '@angular/material';
import { FuseModule } from '@fuse/fuse.module';
import { FuseSharedModule } from '@fuse/shared.module';
import { fuseConfig } from './fuse-config';
import { AppComponent } from './app.component';
import { FuseMainModule } from './main/main.module';
import { FuseSampleModule } from './main/content/sample/sample.module';
import { HomeModule } from './main/content/home/home.module';
import { CartModule } from './main/content/cart/cart.module';
import { LoginModule } from './main/content/login/login.module';
 import { CommentModule} from './main/content/comment/comment.module';
import { CompleteorderModule } from './main/content/completeorder/completeorder.module';
import { CartbeforeModule } from './main/content/cartbefore/cartbefore.module';
import { ProductcardModule } from './main/content/productcard/productcard.module';
import { ProductsingleviewModule } from './main/content/productsingleview/productsingleview.module';
const appRoutes: Routes = [
    {
        path      : '**',
        redirectTo: 'home'
    },
    {
        path      : 'cart',
        redirectTo: 'cart'
    },
    {
        path      : 'login',
        redirectTo: 'login'
    },
    {
        path      : 'cartbefore',
        redirectTo: 'cartbefore'
    },
    
    {
        path      : 'completeorder',
        redirectTo: 'completeorder'
    },
    {
        path      : 'comment',
        redirectTo: 'comment'
    },
    {
        path      : 'productlist',
        redirectTo: 'productlist'
    },
    {
        path      : 'productsingle',
        redirectTo: 'productsingle'
    }
];

@NgModule({
    declarations: [
        AppComponent
    ],
    imports     : [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        RouterModule.forRoot(appRoutes),
        TranslateModule.forRoot(),
        MatDialogModule,
        // Fuse Main and Shared modules
        FuseModule.forRoot(fuseConfig),
        FuseSharedModule,
        FuseMainModule,
        FuseSampleModule,
        HomeModule,
        CartModule,
        LoginModule,
        CartbeforeModule,
        CompleteorderModule,
        CommentModule,
        ProductcardModule,
        ProductsingleviewModule

    ],
    bootstrap   : [
        AppComponent
    ]
})
export class AppModule
{
}
