import { Component, OnInit } from '@angular/core';
import { EChartsOption } from 'echarts';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  listings : any

  option1 : EChartsOption = {
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

  option2 : EChartsOption = {
    color: [
      '#D8D8FE',
      '#4040F2'
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

  constructor(private shared: SharedService) { }

  ngOnInit(): void {
    this.listings = this.shared.listings
  }

}
