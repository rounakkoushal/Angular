import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectAllItems, selectItemsCount, selectLatestItem, selectIsLoading } from 'src/app/Store/Selector';
import { Item } from 'src/app/Store/State';

@Component({
  selector: 'app-selectors',
  templateUrl: './selectors.component.html',
  styleUrls: ['./selectors.component.css']
})
export class SelectorsComponent implements OnInit {

  items$: Observable<Item[]>;
  itemsCount$: Observable<number>;
  latestItem$: Observable<Item | null>;
  isLoading$: Observable<boolean>;

  constructor(private store: Store) {
    this.items$ = this.store.select(selectAllItems);
    this.itemsCount$ = this.store.select(selectItemsCount);
    this.latestItem$ = this.store.select(selectLatestItem);
    this.isLoading$ = this.store.select(selectIsLoading);
  }

  ngOnInit(): void {
  }
}