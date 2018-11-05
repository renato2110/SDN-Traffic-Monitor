import {Component, OnInit} from '@angular/core';
import {AmChartsService} from 'amcharts3-angular2';
import {HttptableElement} from '../../model/httptable-element';
import {OthertableElement} from '../../model/othertable-element';
import {StatisticsService} from '../../services/statistics.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  private data;
  public DNSMacSource = 0;
  public DNSMacDestination = 0;
  public DNSByteCount = 0;
  public DNSBytePercentage = 0;
  public HTTPByteCount = 0;
  // OTHER
  public OTHERByteCount = 0;
  public totalBytes = 0;

  public HTTPTableElements: Array<HttptableElement>;
  public OTHERTableElements: Array<OthertableElement>;

  constructor(private AmCharts: AmChartsService, private statisticsService: StatisticsService) {
    this.HTTPTableElements = [];
    this.OTHERTableElements = [];
  }

  ngOnInit() {
    this.fillData();
  }

  fillData() {
    this.data = {
      'OFPFlowStatsReply': {
        'body': [
          {
            'OFPFlowStats': {
              'byte_count': 3214,
              'cookie': 0,
              'duration_nsec': 2000000,
              'duration_sec': 23,
              'flags': 0,
              'hard_timeout': 0,
              'idle_timeout': 0,
              'instructions': [
                {
                  'OFPInstructionActions': {
                    'actions': [
                      {
                        'OFPActionOutput': {
                          'len': 16,
                          'max_len': 65509,
                          'port': 2,
                          'type': 0
                        }
                      }
                    ],
                    'len': 24,
                    'type': 4
                  }
                }
              ],
              'length': 104,
              'match': {
                'OFPMatch': {
                  'length': 32,
                  'oxm_fields': [
                    {
                      'OXMTlv': {
                        'field': 'in_port',
                        'mask': null,
                        'value': 1
                      }
                    },
                    {
                      'OXMTlv': {
                        'field': 'eth_src',
                        'mask': null,
                        'value': '00:00:00:00:00:01'
                      }
                    },
                    {
                      'OXMTlv': {
                        'field': 'eth_dst',
                        'mask': null,
                        'value': '00:00:00:00:00:02'
                      }
                    }
                  ],
                  'type': 1
                }
              },
              'packet_count': 12,
              'priority': 1,
              'table_id': 0
            }
          },
          {
            'OFPFlowStats': {
              'byte_count': 42,
              'cookie': 0,
              'duration_nsec': 748000000,
              'duration_sec': 17,
              'flags': 0,
              'hard_timeout': 0,
              'idle_timeout': 0,
              'instructions': [
                {
                  'OFPInstructionActions': {
                    'actions': [
                      {
                        'OFPActionOutput': {
                          'len': 16,
                          'max_len': 65509,
                          'port': 1,
                          'type': 0
                        }
                      }
                    ],
                    'len': 24,
                    'type': 4
                  }
                }
              ],
              'length': 104,
              'match': {
                'OFPMatch': {
                  'length': 32,
                  'oxm_fields': [
                    {
                      'OXMTlv': {
                        'field': 'in_port',
                        'mask': null,
                        'value': 2
                      }
                    },
                    {
                      'OXMTlv': {
                        'field': 'eth_src',
                        'mask': null,
                        'value': '00:00:00:00:00:02'
                      }
                    },
                    {
                      'OXMTlv': {
                        'field': 'eth_dst',
                        'mask': null,
                        'value': '00:00:00:00:00:01'
                      }
                    }
                  ],
                  'type': 1
                }
              },
              'packet_count': 1,
              'priority': 1,
              'table_id': 0
            }
          },
          {
            'OFPFlowStats': {
              'byte_count': 3106,
              'cookie': 0,
              'duration_nsec': 413000000,
              'duration_sec': 3,
              'flags': 0,
              'hard_timeout': 0,
              'idle_timeout': 0,
              'instructions': [
                {
                  'OFPInstructionActions': {
                    'actions': [
                      {
                        'OFPActionOutput': {
                          'len': 16,
                          'max_len': 65509,
                          'port': 2,
                          'type': 0
                        }
                      }
                    ],
                    'len': 24,
                    'type': 4
                  }
                }
              ],
              'length': 104,
              'match': {
                'OFPMatch': {
                  'length': 32,
                  'oxm_fields': [
                    {
                      'OXMTlv': {
                        'field': 'in_port',
                        'mask': null,
                        'value': 3
                      }
                    },
                    {
                      'OXMTlv': {
                        'field': 'eth_src',
                        'mask': null,
                        'value': '00:00:00:00:00:03'
                      }
                    },
                    {
                      'OXMTlv': {
                        'field': 'eth_dst',
                        'mask': null,
                        'value': '00:00:00:00:00:02'
                      }
                    }
                  ],
                  'type': 1
                }
              },
              'packet_count': 10,
              'priority': 1,
              'table_id': 0
            }
          },
          {
            'OFPFlowStats': {
              'byte_count': 803,
              'cookie': 0,
              'duration_nsec': 1000000,
              'duration_sec': 23,
              'flags': 0,
              'hard_timeout': 0,
              'idle_timeout': 0,
              'instructions': [
                {
                  'OFPInstructionActions': {
                    'actions': [
                      {
                        'OFPActionOutput': {
                          'len': 16,
                          'max_len': 65509,
                          'port': 1,
                          'type': 0
                        }
                      }
                    ],
                    'len': 24,
                    'type': 4
                  }
                }
              ],
              'length': 144,
              'match': {
                'OFPMatch': {
                  'length': 65,
                  'oxm_fields': [
                    {
                      'OXMTlv': {
                        'field': 'in_port',
                        'mask': null,
                        'value': 2
                      }
                    },
                    {
                      'OXMTlv': {
                        'field': 'eth_src',
                        'mask': null,
                        'value': '00:00:00:00:00:02'
                      }
                    },
                    {
                      'OXMTlv': {
                        'field': 'eth_dst',
                        'mask': null,
                        'value': '00:00:00:00:00:01'
                      }
                    },
                    {
                      'OXMTlv': {
                        'field': 'eth_type',
                        'mask': null,
                        'value': 2048
                      }
                    },
                    {
                      'OXMTlv': {
                        'field': 'ipv4_src',
                        'mask': null,
                        'value': '10.0.0.2'
                      }
                    },
                    {
                      'OXMTlv': {
                        'field': 'ipv4_dst',
                        'mask': null,
                        'value': '10.0.0.1'
                      }
                    },
                    {
                      'OXMTlv': {
                        'field': 'ip_proto',
                        'mask': null,
                        'value': 6
                      }
                    },
                    {
                      'OXMTlv': {
                        'field': 'tcp_dst',
                        'mask': null,
                        'value': 80
                      }
                    }
                  ],
                  'type': 1
                }
              },
              'packet_count': 10,
              'priority': 1,
              'table_id': 0
            }
          },
          {
            'OFPFlowStats': {
              'byte_count': 737,
              'cookie': 0,
              'duration_nsec': 411000000,
              'duration_sec': 3,
              'flags': 0,
              'hard_timeout': 0,
              'idle_timeout': 0,
              'instructions': [
                {
                  'OFPInstructionActions': {
                    'actions': [
                      {
                        'OFPActionOutput': {
                          'len': 16,
                          'max_len': 65509,
                          'port': 3,
                          'type': 0
                        }
                      }
                    ],
                    'len': 24,
                    'type': 4
                  }
                }
              ],
              'length': 144,
              'match': {
                'OFPMatch': {
                  'length': 65,
                  'oxm_fields': [
                    {
                      'OXMTlv': {
                        'field': 'in_port',
                        'mask': null,
                        'value': 2
                      }
                    },
                    {
                      'OXMTlv': {
                        'field': 'eth_src',
                        'mask': null,
                        'value': '00:00:00:00:00:02'
                      }
                    },
                    {
                      'OXMTlv': {
                        'field': 'eth_dst',
                        'mask': null,
                        'value': '00:00:00:00:00:03'
                      }
                    },
                    {
                      'OXMTlv': {
                        'field': 'eth_type',
                        'mask': null,
                        'value': 2048
                      }
                    },
                    {
                      'OXMTlv': {
                        'field': 'ipv4_src',
                        'mask': null,
                        'value': '10.0.0.2'
                      }
                    },
                    {
                      'OXMTlv': {
                        'field': 'ipv4_dst',
                        'mask': null,
                        'value': '10.0.0.3'
                      }
                    },
                    {
                      'OXMTlv': {
                        'field': 'ip_proto',
                        'mask': null,
                        'value': 6
                      }
                    },
                    {
                      'OXMTlv': {
                        'field': 'tcp_dst',
                        'mask': null,
                        'value': 80
                      }
                    }
                  ],
                  'type': 1
                }
              },
              'packet_count': 9,
              'priority': 1,
              'table_id': 0
            }
          },
          {
            'OFPFlowStats': {
              'byte_count': 2116,
              'cookie': 0,
              'duration_nsec': 373000000,
              'duration_sec': 26,
              'flags': 0,
              'hard_timeout': 0,
              'idle_timeout': 0,
              'instructions': [
                {
                  'OFPInstructionActions': {
                    'actions': [
                      {
                        'OFPActionOutput': {
                          'len': 16,
                          'max_len': 65535,
                          'port': 4294967293,
                          'type': 0
                        }
                      }
                    ],
                    'len': 24,
                    'type': 4
                  }
                }
              ],
              'length': 80,
              'match': {
                'OFPMatch': {
                  'length': 4,
                  'oxm_fields': [],
                  'type': 1
                }
              },
              'packet_count': 28,
              'priority': 0,
              'table_id': 0
            }
          }
        ],
        'flags': 0,
        'type': 1
      }
    };
    // this.data = JSON.stringify(json);
    const body = this.data.OFPFlowStatsReply.body;
    console.log(this.data);

    for (let i = 0; i < body.length - 1; i++) {
      this.totalBytes += body[i].OFPFlowStats.byte_count;
    }

    for (let i = 0; i < (body.length - 1); i++) {
      if (body[i].OFPFlowStats.priority !== 2) {
        const match = body[i].OFPFlowStats.match.OFPMatch.oxm_fields;
        // PING OR OTHERS PROTOCOLS
        if (3 >= match.length) {
          this.OTHERByteCount += body[i].OFPFlowStats.byte_count;
          const otherTableElement = new OthertableElement(
            match[0].OXMTlv.value,
            match[2].OXMTlv.value,
            match[1].OXMTlv.value,
            body[i].OFPFlowStats.byte_count,
            this.totalBytes);
          this.OTHERTableElements.push(otherTableElement);
        } else {
          if (match[match.length - 1].OXMTlv.field === 'tcp_dst') {
            this.HTTPByteCount += body[i].OFPFlowStats.byte_count;
            const httpTableElement = new HttptableElement(
              match[5].OXMTlv.value,
              match[4].OXMTlv.value,
              body[i].OFPFlowStats.byte_count,
              this.totalBytes);
            this.HTTPTableElements.push(httpTableElement);
          } else {
            this.DNSMacSource = match[0].OXMTlv.value;
            this.DNSMacDestination = match[1].OXMTlv.value;
            this.DNSByteCount =  body[i].OFPFlowStats.byte_count;
            this.DNSBytePercentage = 100 * (this.DNSByteCount / this.totalBytes);
            this.DNSBytePercentage = Math.round(this.DNSBytePercentage * 100) / 100;
          }
        }
      }
    }
    console.log(this.HTTPTableElements);
    console.log(this.OTHERTableElements);
    this.fillPercentage();
    this.createPie();
  }

  fillPercentage() {
    document.getElementById('dns-progress-bar').style.width = this.DNSBytePercentage + '%';
  }

  createPie() {
    this.AmCharts.makeChart('chartdiv', {
      'type': 'pie',
      'theme': 'light',
      'dataProvider': [{
        'protocol': 'DNS',
        'bytes': this.DNSByteCount
      }, {
        'protocol': 'HTTP',
        'bytes': this.HTTPByteCount
      }, {
        'protocol': 'OTHERS',
        'bytes': this.OTHERByteCount
      }],
      'valueField': 'bytes',
      'titleField': 'protocol',
      'outlineAlpha': 0.4,
      'depth3D': 15,
      'balloonText': '[[title]]<br><span style=\'font-size:14px\'><b>[[bytes]] bytes</b> ([[percents]]%)</span>',
      'angle': 30,
      'export': {
        'enabled': true
      }
    });
  }

  block(httpTableElement: HttptableElement) {
    const response = confirm('Do yo want to block the traffic from '
      + httpTableElement.ipSource + ' to ' + httpTableElement.ipDestination + '?');
    if (response === true) {
      httpTableElement.changeState();
      /*this.statisticsService.httpService(httpTableElement.ipSource, httpTableElement.ipDestination).then(
        response => {
          alert('Success');
        }
      );*/
    }
  }
}
