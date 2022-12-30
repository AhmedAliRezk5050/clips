import {AfterContentInit, Component, ContentChildren, OnInit, QueryList} from '@angular/core';
import {TabComponent} from "../tab/tab.component";

@Component({
  selector: 'app-tabs-container',
  templateUrl: './tabs-container.component.html',
  styleUrls: ['./tabs-container.component.css']
})
export class TabsContainerComponent implements OnInit, AfterContentInit {
  @ContentChildren(TabComponent) tabs?: QueryList<TabComponent>

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterContentInit(): void {
    if(this.tabs) {
       this.tabs.first.active = true;
    }
  }

  selectTab(tabTitle: string) {
    this.tabs?.forEach(tab => {
      tab.active = tab.tabTitle === tabTitle;
    })
    return false;
  }
}
