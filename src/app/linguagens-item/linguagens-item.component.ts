import { Component, OnInit, Input } from '@angular/core';
import { Linguagens } from '../../../typings/typings';

@Component({
  selector: 'app-linguagens-item',
  templateUrl: './linguagens-item.component.html',
  styleUrls: ['./linguagens-item.component.css']
})
export class LinguagensItemComponent implements OnInit {

  @Input() linguagens: Linguagens;

  constructor() { }

  ngOnInit() {
  }

}
