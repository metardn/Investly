import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects = [
    {
      "name" : "Miami development",
      "status" : "Cancelled",
      "status_type" : "cancel-badge",
      "brand" : "Tesla",
      "brand_logo" : "assets/client/tesla.png",
      "contributors" : [],
      "type" : "New build",
      "type_badge" : "new-type",
      "due_date" : "Thu 12 Dec"
    },
    {
      "name" : "Prague apartment",
      "status" : "In review",
      "status_type" : "review-badge",
      "brand" : "Nike Athletic",
      "brand_logo" : "assets/client/nike.png",
      "contributors" : [],
      "type" : "Reconstruction",
      "type_badge" : "reconstruction",
      "due_date" : "Thu 12 Dec"
    },
    {
      "name" : "Czech redevelopment",
      "status" : "In progress",
      "status_type" : "progress-badge",
      "brand" : "Sony",
      "brand_logo" : "assets/client/sony.png",
      "contributors" : [],
      "type" : "Commercial",
      "type_badge" : "commercial",
      "due_date" : "Wed 04 Dec"
    },
    {
      "name" : "Paris apartment",
      "status" : "In progress",
      "status_type" : "progress-badge",
      "brand" : "Apple",
      "brand_logo" : "assets/client/apple.png",
      "contributors" : [],
      "type" : "Residential",
      "type_badge" : "residential",
      "due_date" : "Tue 03  Dec"
    },
    {
      "name" : "India corporate property",
      "status" : "In review",
      "status_type" : "review-badge",
      "brand" : "Apple",
      "brand_logo" : "assets/client/apple.png",
      "contributors" : [],
      "type" : "Commercial",
      "type_badge" : "commercial",
      "due_date" : "Mon 15 Jan"
    },
    {
      "name" : "New Delhi commercial",
      "status" : "In review",
      "status_type" : "review-badge",
      "brand" : "Nike Athletic",
      "brand_logo" : "assets/client/nike.png",
      "contributors" : [],
      "type" : "Commercial",
      "type_badge" : "commercial",
      "due_date" : "Thu 21 Oct"
    },
    {
      "name" : "Mumbai residential",
      "status" : "In progress",
      "status_type" : "progress-badge",
      "brand" : "Sony",
      "brand_logo" : "assets/client/sony.png",
      "contributors" : [],
      "type" : "Residential",
      "type_badge" : "residential",
      "due_date" : "Wed 20 Sep"
    },
    {
      "name" : "South Korean infrastructure",
      "status" : "In review",
      "status_type" : "review-badge",
      "brand" : "Apple",
      "brand_logo" : "assets/client/apple.png",
      "contributors" : [],
      "type" : "Reconstruction",
      "type_badge" : "reconstruction",
      "due_date" : "Mon 01 Feb"
    },
    {
      "name" : "Moscow apartment",
      "status" : "In review",
      "status_type" : "review-badge",
      "brand" : "Reebok",
      "brand_logo" : "assets/client/reebok.png",
      "contributors" : [],
      "type" : "Residential",
      "type_badge" : "residential",
      "due_date" : "Sat 13 May"
    },
    {
      "name" : "Saint Petersburg office",
      "status" : "Approved",
      "status_type" : "approved-badge",
      "brand" : "Sony",
      "brand_logo" : "assets/client/sony.png",
      "contributors" : [],
      "type" : "Residential",
      "type_badge" : "residential",
      "due_date" : "Sat 13 May"
    },
    {
      "name" : "London apartment 2022",
      "status" : "In review",
      "status_type" : "review-badge",
      "brand" : "Sony",
      "brand_logo" : "assets/client/sony.png",
      "contributors" : [],
      "type" : "Residential",
      "type_badge" : "residential",
      "due_date" : "Fri 12 May"
    },
    {
      "name" : "Kings Road townhouse",
      "status" : "In review",
      "status_type" : "review-badge",
      "brand" : "Tesla",
      "brand_logo" : "assets/client/tesla.png",
      "contributors" : [],
      "type" : "Commercial",
      "type_badge" : "commercial",
      "due_date" : "Sun 02 Mar"
    },
    {
      "name" : "Kings Road offices",
      "status" : "Approved",
      "status_type" : "approved-badge",
      "brand" : "Tesla",
      "brand_logo" : "assets/client/tesla.png",
      "contributors" : [],
      "type" : "Commercial",
      "type_badge" : "commercial",
      "due_date" : "Tue 26 Jun"
    },
    {
      "name" : "Old Street maisonette",
      "status" : "Approved",
      "status_type" : "approved-badge",
      "brand" : "Sony",
      "brand_logo" : "assets/client/sony.png",
      "contributors" : [],
      "type" : "New build",
      "type_badge" : "new-type",
      "due_date" : "Fri 02 Jan"
    },
    {
      "name" : "Miami development",
      "status" : "Approved",
      "status_type" : "approved-badge",
      "brand" : "Sony",
      "brand_logo" : "assets/client/sony.png",
      "contributors" : [],
      "type" : "New build",
      "type_badge" : "new-type",
      "due_date" : "Thu 01 Jan"
    },
    {
      "name" : "New York highrises",
      "status" : "In progress",
      "status_type" : "progress-badge",
      "brand" : "Sony",
      "brand_logo" : "assets/client/sony.png",
      "contributors" : [],
      "type" : "Commercial",
      "type_badge" : "commercial",
      "due_date" : "Sun 02 Mar"
    }
  ]
  
  constructor() { }

  ngOnInit(): void {
  }

}
