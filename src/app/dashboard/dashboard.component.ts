import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  listings : any

  constructor(private shared: SharedService) { }

  ngOnInit(): void {
    this.listings = this.shared.listings
  }

}
