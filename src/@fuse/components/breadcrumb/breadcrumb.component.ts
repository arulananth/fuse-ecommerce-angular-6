import { Component, EventEmitter, Output, OnInit ,Input } from '@angular/core';
import { Subscription,Observable ,  Observer } from 'rxjs';
import {MatDialog} from '@angular/material';
import { FuseConfigService } from '@fuse/services/config.service';

@Component({
    selector   : 'breadcrumb',
    templateUrl: './breadcrumb.component.html',
    styleUrls  : ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent
{
    @Input() dashData: any;
    collapsed: boolean;
    toolbarColor: string;
    @Output() onInput: EventEmitter<any> = new EventEmitter();
    onConfigChanged: Subscription;

    constructor(
        private fuseConfig: FuseConfigService, public dialog: MatDialog
    )
    {
        this.collapsed = true;
        this.onConfigChanged =
            this.fuseConfig.onConfigChanged
                .subscribe(
                    (newSettings) => {
                        this.toolbarColor = newSettings.colorClasses.toolbar;
                    }
                );
    }
  ngOnInit() {
    }

    collapse()
    {
        this.collapsed = true;
    }

    expand()
    {
        this.collapsed = false;
    }

    search(event)
    {
        const value = event.target.value;

        this.onInput.emit(value);
    }
openbreadDialog() {
    const dialogRef = this.dialog.open(BreadDialogContent, {
      height: 'auto'
    });

   
  }

}
@Component({
  selector: 'breaddialog-content',
  templateUrl: './dialog-content.html',
})
export class BreadDialogContent{}