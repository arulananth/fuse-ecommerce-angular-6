import { Component, OnInit } from '@angular/core';
import { FuseTranslationLoaderService } from '@fuse/services/translation-loader.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { locale as english } from './i18n/en';
import { locale as turkish } from './i18n/tr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  isEditable = false;
  constructor(private fuseTranslationLoader: FuseTranslationLoaderService, private _formBuilder: FormBuilder)
    {
        this.fuseTranslationLoader.loadTranslations(english, turkish);
    }

  
  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }
 
}
