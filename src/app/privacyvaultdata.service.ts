import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable()
export class PrivacyvaultdataService {

  constructor(private httpClient: HttpClient) { }

  public searchData(query) {
    const url = 'http://localhost:8080/privacy_vault_war_exploded/api/search?query=' + query;

    const result = this.httpClient.get(url, {
      headers: new HttpHeaders().set('Access-Token', '096f34ed-a34a-4e3a-8230-d9fb8e0d7be3')
    });

    return result;
  }

}
