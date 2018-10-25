import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpResponse } from "@angular/common/http";
import { Http, Response, Headers} from '@angular/http';

@Injectable()
export class StatisticsService {
	
  private testWebServiceUrl: string = "https://www.w3schools.com/angular/welcome.htm"
  private headers: Headers;
  
  constructor(private http: Http) { }
  
  testWebService(): Promise<any> {
	return this.http.get(this.testWebServiceUrl).toPromise();
  }
  
  private extractData(res: Response) {
    return res || {};
  }

  private extractUserData(res: Response) {
    return res.json() || {};
  }

  private handleError(error: any): Promise<any> {
    return Promise.reject(error.message || error);
  }
}