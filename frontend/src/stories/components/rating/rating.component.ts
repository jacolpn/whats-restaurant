import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-storybook-rating',
  templateUrl: './rating.component.html'
})
export class RatingComponent implements OnInit {

  rates: number[] = [1, 2, 3, 4, 5];
  rate = 0;
  previusRate: number;

  @Output() rated = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {}

  setRate(r: number): void {
    this.rate = r;
    this.previusRate = undefined;
    this.rated.emit(this.rate);
  }

  setTemporaryRate(r: number): void {
    if (this.previusRate === undefined) {
      this.previusRate = this.rate;
    }
    this.rate = r;
  }

  clearTemporaryRate(): void {
    if (this.previusRate !== undefined) {
      this.rate = this.previusRate;
      this.previusRate = undefined;
    }
  }
}
