import { Component, EventEmitter, Output, OnInit ,Input } from '@angular/core';
import { Subscription,Observable ,  Observer } from 'rxjs';

import {MatDialog} from '@angular/material';
import { FuseConfigService } from '@fuse/services/config.service';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';
@Component({
    selector   : 'productsingle',
    templateUrl: './productsingle.component.html',
    styleUrls  : ['./productsingle.component.scss']
})
export class ProductsingleComponent
{
   galleryOptions: NgxGalleryOptions[];
    galleryImages: NgxGalleryImage[];
    constructor(
        private fuseConfig: FuseConfigService, public dialog: MatDialog
    )
    {
        
    }

    ngOnInit(): void {
        this.galleryOptions = [
            {
                width: '100%',
                height: '400px',
                thumbnailsColumns: 4,
                imageAnimation: NgxGalleryAnimation.Slide,
                thumbnails:false,
                thumbnailsArrows: false,
                imageArrows: false
            },
            // max-width 800
            {
                breakpoint: 800,
                width: '100%',
                height: '600px',
                imagePercent: 80,
                thumbnailsPercent: 20,
                thumbnailsMargin: 20,
                thumbnailMargin: 20
            },
            // max-width 400
            {
                breakpoint: 400,
                preview: false
            }
        ];
 
        this.galleryImages = [
            {
                small: 'assets/images/product/phone.jpg',
                medium: 'assets/images/product/phone.jpg',
                big: 'assets/images/product/phone.jpg'
            },
            {
                small: 'assets/images/product/phone.jpg',
                medium: 'assets/images/product/phone.jpg',
                big: 'assets/images/product/phone.jpg'
            },
            {
                small: 'assets/images/product/phone.jpg',
                medium: 'assets/images/product/phone.jpg',
                big: 'assets/images/product/phone.jpg'
            }
        ];
    }

    openDialog() {
    const dialogRef = this.dialog.open(CartDialogContent, {
      height: 'auto'
    });

   
  }
}
@Component({
  selector: 'cartdialog-content',
  templateUrl: './cartdialog-content.html',
})
export class CartDialogContent{}