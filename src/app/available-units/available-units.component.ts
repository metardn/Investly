import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'app-available-units',
  templateUrl: './available-units.component.html',
  styleUrls: ['./available-units.component.scss']
})
export class AvailableUnitsComponent implements OnInit {
  images = [
    "assets/available/img1.jpg",
    "assets/available/img2.jpg",
    "assets/available/img3.jpg"
  ]

  listings: any
  constructor(private shared: SharedService) { }

  ngOnInit(): void {
    this.listings = this.shared.listings
  }

}
