import { Component, EventEmitter, Output, OnInit ,Input } from '@angular/core';
import { Subscription,Observable ,  Observer } from 'rxjs';
import { FuseConfigService } from '@fuse/services/config.service';

@Component({
    selector   : 'ordercomplete',
    templateUrl: './ordercomplete.component.html',
    styleUrls  : ['./ordercomplete.component.scss']
})
export class OrdercompleteComponent
{
    @Input() dashData: any;
    collapsed: boolean;
    toolbarColor: string;
    @Output() onInput: EventEmitter<any> = new EventEmitter();
    onConfigChanged: Subscription;

    constructor(
        private fuseConfig: FuseConfigService
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

}
