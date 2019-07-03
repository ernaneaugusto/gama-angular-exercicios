import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LinguagensService {

  constructor(private httpClient: HttpClient) { }

  getLinguagens(){
    return this.httpClient.get('https://alefesouza.dev/gama/languages.php');
  }
}
