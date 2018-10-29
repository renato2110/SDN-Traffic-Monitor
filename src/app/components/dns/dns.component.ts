import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dns',
  templateUrl: './dns.component.html',
  styleUrls: ['./dns.component.css']
})
export class DnsComponent implements OnInit {

  private data;

  constructor() { }

  ngOnInit() {

    this.data = [
      {
          "mac": "99:12:aa:01:ff:11",
          "port": "1",
          "ip": "10.0.0.1",
          "destiny_ip": "192.168.10.1",
          "bytes": "324"
      },  
      {
          "mac": "10:AB:B5:22:01",
          "port": "2",
          "ip": "192.168.10.1",
          "destiny_ip": "10.0.0.1",
          "bytes": "1002"
      }
    ]

  }

}
