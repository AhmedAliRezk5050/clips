import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap, Params, Route, Router} from "@angular/router";

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent implements OnInit {

  videoOrder = '1';

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((params: ParamMap) => {
      const sortValue = params.get('sort');
      this.videoOrder = sortValue == '2' ? sortValue : '1'
    });
  }

  async sort(event: Event) {
    const {value} = event.target as HTMLSelectElement
    await this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {
        sort: value
      }
    });
  }
}
