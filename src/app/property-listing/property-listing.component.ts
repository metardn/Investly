import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-listing',
  templateUrl: './property-listing.component.html',
  styleUrls: ['./property-listing.component.scss']
})
export class PropertyListingComponent implements OnInit {
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
    }
  ]
  images = [
    {
      "url" : "assets/mosaic/img1.jpg",
      "style" : "img1"
    },
    {
      "url" : "assets/mosaic/img2.jpg",
      "style" : "img2"
    },
    {
      "url" : "assets/mosaic/img3.jpg",
      "style" : "img2"
    },
    {
      "url" : "assets/mosaic/img4.jpg",
      "style" : "img2"
    },
    {
      "url" : "assets/mosaic/img5.jpg",
      "style" : "img2"
    }
  ]

  details = [
    {
      "label" : "Asking price",
      "body" : "£999,999",
      "icon" : "bi bi-currency-dollar"
    },
    {
      "label" : "Contact details",
      "body" : "+44 020 8479 9242",
      "icon" : "bi bi-telephone"
    },
    {
      "label" : "Managing agent",
      "body" : "Christoph Paul",
      "icon" : "bi bi-person"
    },
    {
      "label" : "Expected returns",
      "body" : "5% annual profits",
      "icon" : "bi bi-graph-up-arrow"
    },
    {
      "label" : "Date available",
      "body" : "21 January 2022",
      "icon" : "bi bi-calendar"
    },
    {
      "label" : "Property type",
      "body" : "Residential unit",
      "icon" : "bi bi-building"
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
