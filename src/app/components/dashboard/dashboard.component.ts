import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  private data;
  public DNSByteCount = 0;
  public DNSBytePercentage = 30;
  // PORT 80
  public HTTPByteCount1 = 0;
  public HTTPBytePercentage1 = 40;
  // PORT 8080
  public HTTPByteCount2 = 0;
  public HTTPBytePercentage2 = 30;

  constructor() {
  }

  ngOnInit() {
    this.data = {
      'OFPFlowStatsReply': {
        'body': [
          {
            'OFPFlowStats': {
              'byte_count': 5320,
              'cookie': 0,
              'duration_nsec': 611000000,
              'duration_sec': 53,
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
              'packet_count': 56,
              'priority': 1,
              'table_id': 0
            }
          },
          {
            'OFPFlowStats': {
              'byte_count': 5278,
              'cookie': 0,
              'duration_nsec': 607000000,
              'duration_sec': 53,
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
              'packet_count': 55,
              'priority': 1,
              'table_id': 0
            }
          },
          {
            'OFPFlowStats': {
              'byte_count': 1968,
              'cookie': 0,
              'duration_nsec': 790000000,
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
              'packet_count': 26,
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
    console.log(this.data);

    document.getElementById('dns-progress-bar').style.width = this.DNSBytePercentage + '%';
    document.getElementById('http-1-progress-bar').style.width = this.HTTPBytePercentage1 + '%';
    document.getElementById('http-2-progress-bar').style.width = this.HTTPBytePercentage2 + '%';
  }

}
