import {Component, OnInit} from '@angular/core';
import {StatisticsService} from '../../services/statistics.service';

@Component({
  selector: 'app-mac-ip',
  templateUrl: './mac-ip.component.html',
  styleUrls: ['./mac-ip.component.css']
})
export class MacIpComponent implements OnInit {

  public data;

  constructor(private statisticsService: StatisticsService) {
  }

  ngOnInit() {/*
    this.statisticsService.mactableService().then(response => {
      this.data = response;
    });*/
  }
}
