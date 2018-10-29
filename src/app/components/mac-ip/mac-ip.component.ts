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
          "mac": "99:12:aa:01:ff:11",
          "ip": "192.168.10.1"
      },  
      {
          "mac": "10:AB:B5:22:01",
          "ip": "10.0.0.1"
      }
    ]
  }
}