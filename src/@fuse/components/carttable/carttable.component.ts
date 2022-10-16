import { Component, EventEmitter, Output, OnInit ,Input } from '@angular/core';
import { Subscription,Observable ,  Observer } from 'rxjs';
import { FuseConfigService } from '@fuse/services/config.service';
import {MatDialog} from '@angular/material';
@Component({
    selector   : 'carttable',
    templateUrl: './carttable.component.html',
    styleUrls  : ['./carttable.component.scss']
})
export class CarttableComponent
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
    openDialog() {
    const dialogRef = this.dialog.open(CarttableDialogContent, {
      height: 'auto'
    }); }
}
@Component({
  selector: 'carttabledialog-content',
  templateUrl: './carttabledialog-content.html',
})
export class CarttableDialogContent{}