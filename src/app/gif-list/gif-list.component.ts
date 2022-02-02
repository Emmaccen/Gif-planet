import { Component, OnInit } from '@angular/core';
import { GifService } from '../service/gif.service';
@Component({
  selector: 'app-gif-list',
  templateUrl: './gif-list.component.html',
  styleUrls: ['./gif-list.component.scss'],
})
export class GifListComponent implements OnInit {
  data: any = [];
  searchText = 'cartoon';

  constructor(private _gifService: GifService) {}

  ngOnInit(): void {
    this.getGif();
  }

  get searchTerm(): string {
    return this.searchText;
  }

  set searchTerm(value: string) {
    this.searchText = value;
  }

  display() {
    this.getGif();
  }

  getGif(): void {
    this._gifService.getGif(this.searchText).subscribe(({ data }: any) => {
      this.data = data;
    });
  }
}
