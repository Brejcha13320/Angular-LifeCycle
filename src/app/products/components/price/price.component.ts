import {
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrl: './price.component.scss',
})
export class PriceComponent implements OnInit, OnChanges, OnDestroy {
  @Input() price: number = 0;
  public intervarl$?: Subscription;

  ngOnInit(): void {
    console.log('PriceComponent [Hijo] ngOnInit');
    this.intervarl$ = interval(1000).subscribe((value) =>
      console.log(`Tick: ${value}`)
    );
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('PriceComponent [Hijo] ngOnChanges');
    console.log({ changes });
  }
  ngOnDestroy(): void {
    console.log('PriceComponent [Hijo] ngOnDestroy');
    this.intervarl$?.unsubscribe();
  }
}
