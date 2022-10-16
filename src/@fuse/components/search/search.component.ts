import { Component, EventEmitter, Output, OnInit ,Input } from '@angular/core';
import { Subscription,Observable ,  Observer } from 'rxjs';


import { FuseConfigService } from '@fuse/services/config.service';

@Component({
    selector   : 'search',
    templateUrl: './search.component.html',
    styleUrls  : ['./search.component.scss']
})
export class SearchComponent
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
