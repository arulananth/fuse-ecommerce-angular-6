import { Component, OnInit } from '@angular/core';
import { FuseTranslationLoaderService } from '@fuse/services/translation-loader.service';
import {MatDialog} from '@angular/material';
import { locale as english } from './i18n/en';
import { locale as turkish } from './i18n/tr';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {

  constructor(private fuseTranslationLoader: FuseTranslationLoaderService, public dialog: MatDialog)
    {
        this.fuseTranslationLoader.loadTranslations(english, turkish);
    }

  ngOnInit() {
  }
  
openDialog() {
    const dialogRef = this.dialog.open(DialogContent, {
      height: 'auto'
    });

   
  }
}


@Component({
  selector: 'dialog-content',
  templateUrl: './dialog-content.html',
})
export class DialogContent{}
