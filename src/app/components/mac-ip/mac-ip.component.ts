import {Component, OnInit} from '@angular/core';
import {StatisticsService} from '../../services/statistics.service';
import {MacIp} from '../../model/mac-ip';

@Component({
  selector: 'app-mac-ip',
  templateUrl: './mac-ip.component.html',
  styleUrls: ['./mac-ip.component.css']
})
export class MacIpComponent implements OnInit {

  public data;
  public macIpList: Array<MacIp>;

  constructor(private statisticsService: StatisticsService) {
    this.macIpList = [];
  }

  ngOnInit() {/*
    this.statisticsService.mactableService().then(response => {
      this.data = response;
    });*/


    this.data = [
      {
        '99:12:aa:01:ff:11': '1',
        '10:AB:B5:22:01:92': '2'
      }
    ];

    for (var key in this.data[0]) {
      const macIp = new MacIp(key, this.data[0][key]);
      this.macIpList.push(macIp);
    }
  }
}
