import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cvariable',
  templateUrl: './cvariable.component.html',
  styleUrls: ['./cvariable.component.css']
})
export class CVariableComponent implements OnInit {

  @Input() texto : string;

  constructor() { }

  ngOnInit(): void {
  }

}
