import { Component, OnInit } from '@angular/core';
import { StatisticsService } from '../../services/statistics.service';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements OnInit {
	
  constructor( private statisticsService: StatisticsService) { }

  ngOnInit() {
	  this.statisticsService.testWebService().then(
		response => { console.log(response);
	  });
  }

}
