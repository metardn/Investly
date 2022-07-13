import { Component, OnInit } from '@angular/core';
import { EChartsOption } from 'echarts';

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.scss']
})
export class InvoicesComponent implements OnInit {

  option1 : EChartsOption = {
    color: [
      '#FF513A',
      '#FFE8D7'
    ],
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: ['80%', '95%'],
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: 'center'
        },
        data: [
          { value: 1 },
          { value: 1 }
        ]
      }
    ]
  }

  option2 : EChartsOption = {
    color: [
      '#E6FBD9',
      '#44C13C'
    ],
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: ['80%', '95%'],
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: 'center'
        },
        data: [
          { value: 4 },
          { value: 8 }
        ]
      }
    ]
  }

  option3 : EChartsOption = {
    color: [
      '#E6FBD9',
      '#44C13C'
    ],
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: ['80%', '95%'],
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: 'center'
        },
        data: [
          { value: 4 },
          { value: 8 }
        ]
      }
    ]
  }

  status_list = [
    {
      "label" : "In review",
      "type" : "review-badge"
    },
    {
      "label" : "In review",
      "type" : "review-badge"
    },
    {
      "label" : "Approved",
      "type" : "approved-badge"
    },
    {
      "label" : "Approved",
      "type" : "approved-badge"
    },
    {
      "label" : "In review",
      "type" : "review-badge"
    },
    {
      "label" : "Approved",
      "type" : "approved-badge"
    },
    {
      "label" : "In review",
      "type" : "review-badge"
    },
    {
      "label" : "Approved",
      "type" : "approved-badge"
    },
    {
      "label" : "In review",
      "type" : "review-badge"
    },
    {
      "label" : "Cancelled",
      "type" : "cancel-badge"
    },
    {
      "label" : "Approved",
      "type" : "approved-badge"
    },
    {
      "label" : "Cancelled",
      "type" : "cancel-badge"
    },
    {
      "label" : "Approved",
      "type" : "approved-badge"
    },
    {
      "label" : "In review",
      "type" : "review-badge"
    },
    {
      "label" : "In review",
      "type" : "review-badge"
    }
  ]

  sony = "assets/client/sony.png"
  
  constructor() { }

  ngOnInit(): void {
  }

}
