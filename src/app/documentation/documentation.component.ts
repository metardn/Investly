import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-documentation',
  templateUrl: './documentation.component.html',
  styleUrls: ['./documentation.component.scss']
})
export class DocumentationComponent implements OnInit {

  icon_cards = [
    {
      "icon" : "bi bi-person-circle",
      "title" : "Profile and settings",
      "body" : "Learn how to configure your profile, set up notifications and customise."
    },
    {
      "icon" : "bi bi-building",
      "title" : "Property listings",
      "body" : "How our listings work, how to post new listings and how to respond to others."
    },
    {
      "icon" : "bi bi-chat-left-text-fill",
      "title" : "Messaging",
      "body" : "How our listings work, how to post new listings and how to respond to others."
    },
    {
      "icon" : "bi bi-clock",
      "title" : "Projects",
      "body" : "How our listings work, how to post new listings and how to respond to others."
    },
    {
      "icon" : "bi bi-activity",
      "title" : "Integrations",
      "body" : "How to set up and manage your unique integration environment."
    },
    {
      "icon" : "bi bi-share-fill",
      "title" : "Social media",
      "body" : "How to use social media in conjunction with investly to maximise efficacy."
    },
    {
      "icon" : "bi bi-shield-fill-check",
      "title" : "Invoices",
      "body" : "How to set up, manage, pay, and send invoices within your application."
    },
    {
      "icon" : "bi bi-folder",
      "title" : "Dashboard",
      "body" : "How to configure and personalise the dashboard experience."
    }
  ]

  quick_cards = [
    "Post a property listing",
    "Editing an existing listing",
    "Add a new user profile",
    "Upgrade your plane",
    "Delete your listings",
    "Create a new chart",
    "Set up price alerts",
    "Modify your invoices"
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
