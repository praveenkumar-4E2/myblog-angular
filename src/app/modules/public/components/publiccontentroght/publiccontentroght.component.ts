import { Component, Input, OnInit } from '@angular/core';
import { Page } from '../../models/page';

@Component({
  selector: 'app-publiccontentroght',
  templateUrl: './publiccontentroght.component.html',
  styleUrls: ['./publiccontentroght.component.css']
})
export class PubliccontentroghtComponent implements OnInit {

  @Input()
  page!:Page;
  constructor() { }

  ngOnInit(): void {
  }

}
