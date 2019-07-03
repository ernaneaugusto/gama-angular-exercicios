import { Component, OnInit } from '@angular/core';
import { LinguagensService } from '../linguagens.service';

@Component({
  selector: 'app-linguagens',
  templateUrl: './linguagens.component.html',
  styleUrls: ['./linguagens.component.css']
})
export class LinguagensComponent implements OnInit {
  linguagens: any;
  
  constructor(private linguagensService: LinguagensService) { }

  ngOnInit() {
    this.linguagensService.getLinguagens().subscribe(value => {
      console.log(value);
      this.linguagens = value;
    });
  }

}
