import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mac-ip',
  templateUrl: './mac-ip.component.html',
  styleUrls: ['./mac-ip.component.css']
})
export class MacIpComponent implements OnInit {

  private data;

  constructor() { }

  ngOnInit() {

    this.data = [
      {
        'mac': '99:12:aa:01:ff:11',
        'port': '2'
      },
      {
        'mac': '10:AB:B5:22:01',
        'port': '1'
      }
    ];
  }
}
