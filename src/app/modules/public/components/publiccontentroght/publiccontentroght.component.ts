import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Page } from '../../models/page';

@Component({
  selector: 'app-publiccontentroght',
  templateUrl: './publiccontentroght.component.html',
  styleUrls: ['./publiccontentroght.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PubliccontentroghtComponent implements OnInit {

  @Input()
  page!:Page;
  constructor() { }

  ngOnInit(): void {
  }

}
