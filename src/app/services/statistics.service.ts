import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class StatisticsService {

  private getGeneralServiceURL = 'localhost:8080/flows';
  private getPortsServiceURL = 'localhost:8080/ports';
  private getMactableServiceURL = 'localhost:8080/mactable/0000000000000001';
  private getHttpServiceURL = 'localhost:8080/web';

  constructor(private http: HttpClient) {
  }

  generalService(): Promise<any> {
    return this.http.get(this.getGeneralServiceURL).toPromise();
  }

  portsService(): Promise<any> {
    return this.http.get(this.getPortsServiceURL).toPromise();
  }

  mactableService(): Promise<any> {
    return this.http.get(this.getMactableServiceURL).toPromise();
  }

  httpService(source: string, destination: string): Promise<any> {
    return this.http.get(this.getHttpServiceURL, {
      params: {
        'ipv4_src' : source,
        'ipv4_dst' : destination
      }}).toPromise();
  }
}
