import { Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'app-gif-card',
  templateUrl: './gif-card.component.html',
  styleUrls: ['./gif-card.component.scss']
})
export class GifCardComponent implements OnInit {
  @Input() src: string = '';
  @Input() title: string = '';
  constructor() { }

  ngOnInit(): void {
  }

}
