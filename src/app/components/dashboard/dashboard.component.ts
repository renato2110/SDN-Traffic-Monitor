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
  this.statisticsService.generalService().then(response => {
	  this.data = response;
	  console.log(this.data);
	  this.fillData();
    });
  }

  fillData() {
    const body = this.data.OFPFlowStatsReply.body;

    for (let i = 0; i < body.length; i++) {
      if (body[i].OFPFlowStats.priority !== 2) {
	     if (3 <= body[i].OFPFlowStats.match.OFPMatch.oxm_fields.length) {
      		this.totalBytes += body[i].OFPFlowStats.byte_count;
	  	 }
	  }
    }

    for (let i = 0; i < (body.length); i++) {
      if (body[i].OFPFlowStats.priority !== 2) {
        const match = body[i].OFPFlowStats.match.OFPMatch.oxm_fields;
        // PING OR OTHERS PROTOCOLS
        if (3 === match.length) {
          this.OTHERByteCount += body[i].OFPFlowStats.byte_count;
          const otherTableElement = new OthertableElement(
            match[0].OXMTlv.value,
            match[2].OXMTlv.value,
            match[1].OXMTlv.value,
            body[i].OFPFlowStats.byte_count,
            this.totalBytes);
          this.OTHERTableElements.push(otherTableElement);
        } else if (3 < match.length){
          if (match[match.length - 1].OXMTlv.field === 'tcp_dst') {
            this.HTTPByteCount += body[i].OFPFlowStats.byte_count;
            const httpTableElement = new HttptableElement(
              match[match.length - 2].OXMTlv.value,
              match[match.length - 3].OXMTlv.value,
              body[i].OFPFlowStats.byte_count,
              this.totalBytes);
            this.HTTPTableElements.push(httpTableElement);
          } else if (match[match.length - 1].OXMTlv.field === 'udp_dst'){
		   alert(this.DNSMacSource = match[2].OXMTlv.value);
            this.DNSMacSource = match[2].OXMTlv.value;
            this.DNSMacDestination = match[1].OXMTlv.value;
            this.DNSByteCount =  body[i].OFPFlowStats.byte_count;
            this.DNSBytePercentage = 100 * (this.DNSByteCount / this.totalBytes);
            this.DNSBytePercentage = Math.round(this.DNSBytePercentage * 100) / 100;
          }
        }
      }
    }
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