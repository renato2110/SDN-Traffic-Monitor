import {Component, OnInit} from '@angular/core';
import {StatisticsService} from '../../services/statistics.service';

@Component({
  selector: 'app-ports',
  templateUrl: './ports.component.html',
  styleUrls: ['./ports.component.css']
})
export class PortsComponent implements OnInit {

  public data;

  constructor(private statisticsService: StatisticsService) {
  }

  ngOnInit() {

    this.statisticsService.portsService().then(response => {
      this.data = response.OFPPortStatsReply.body;
    });

  }

}
