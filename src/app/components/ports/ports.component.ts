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
      // this.data = response;
    });

    const json = {
      'OFPPortStatsReply': {
        'body': [
          {
            'OFPPortStats': {
              'collisions': 0,
              'duration_nsec': 104000000,
              'duration_sec': 27,
              'port_no': 4294967294,
              'rx_bytes': 0,
              'rx_crc_err': 0,
              'rx_dropped': 16,
              'rx_errors': 0,
              'rx_frame_err': 0,
              'rx_over_err': 0,
              'rx_packets': 0,
              'tx_bytes': 0,
              'tx_dropped': 0,
              'tx_errors': 0,
              'tx_packets': 0
            }
          },
          {
            'OFPPortStats': {
              'collisions': 0,
              'duration_nsec': 105000000,
              'duration_sec': 27,
              'port_no': 1,
              'rx_bytes': 1901,
              'rx_crc_err': 0,
              'rx_dropped': 0,
              'rx_errors': 0,
              'rx_frame_err': 0,
              'rx_over_err': 0,
              'rx_packets': 23,
              'tx_bytes': 7403,
              'tx_dropped': 2,
              'tx_errors': 0,
              'tx_packets': 50
            }
          },
          {
            'OFPPortStats': {
              'collisions': 0,
              'duration_nsec': 105000000,
              'duration_sec': 27,
              'port_no': 2,
              'rx_bytes': 4164,
              'rx_crc_err': 0,
              'rx_dropped': 0,
              'rx_errors': 0,
              'rx_frame_err': 0,
              'rx_over_err': 0,
              'rx_packets': 23,
              'tx_bytes': 5030,
              'tx_dropped': 0,
              'tx_errors': 0,
              'tx_packets': 49
            }
          }
        ],
        'flags': 0,
        'type': 4
      }
    };

    this.data = json.OFPPortStatsReply.body;

  }

}
