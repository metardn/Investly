import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  listings = [
    {
      "name": "Boston family home",
      "desc" : "A beautiful townhouse in the heart of Miami's down town district. With 3 bedrooms and heated pool.",
      "image" : "assets/listings/img1.jpg",
      "card" : "card1"
    },
    {
      "name": "Miami  beach house",
      "desc" : "A beautiful townhouse in the heart of Miami's down town district. With 3 bedrooms and heated pool.",
      "image" : "assets/listings/img2.jpg",
      "card" : "card2"
    },
    {
      "name": "New York Townhouse",
      "desc" : "A beautiful townhouse in the heart of Miami's down town district. With 3 bedrooms and heated pool.",
      "image" : "assets/listings/img3.jpg",
      "card" : "card3"
    },
    {
      "name": "Beachfront Mansion Miami",
      "desc" : "A beautiful townhouse in the heart of Miami's down town district. With 3 bedrooms and heated pool.",
      "image" : "assets/listings/img4.jpg",
      "card" : "card4"
    },
    {
      "name": "Hamptons Villa",
      "desc" : "A beautiful townhouse in the heart of Miami's down town district. With 3 bedrooms and heated pool.",
      "image" : "assets/listings/img5.jpg",
      "card" : "card5"
    },
    {
      "name": "San Fransisco Condo",
      "desc" : "A beautiful townhouse in the heart of Miami's down town district. With 3 bedrooms and heated pool.",
      "image" : "assets/listings/img6.jpg",
      "card" : "card6"
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
