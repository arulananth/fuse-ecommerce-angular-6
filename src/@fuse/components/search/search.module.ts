import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { MatButtonModule, MatIconModule,MatExpansionModule,MatFormFieldModule,MatInputModule } from '@angular/material';
import { SearchComponent } from './search.component';
import { FlexLayoutModule } from '@angular/flex-layout';
@NgModule({
    declarations: [
        SearchComponent
    ],
    imports     : [
        CommonModule,
        RouterModule,
        FlexLayoutModule,
        MatButtonModule,
        MatIconModule,
        MatExpansionModule,
        MatInputModule,
        MatFormFieldModule,
        BrowserModule
    ],
    exports     : [
        SearchComponent
    ]
})
export class SearchModule
{
}
