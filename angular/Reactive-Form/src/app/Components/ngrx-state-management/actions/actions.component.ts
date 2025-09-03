import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { addItem, removeItem, clearItems } from 'src/app/Store/Action';
import { selectAllItems, selectLatestItem } from 'src/app/Store/Selector';
import { Item } from 'src/app/Store/State';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.css']
})
export class ActionsComponent implements OnInit {

  private itemIdCounter = 1;
  items$: Observable<Item[]>;
  latestItem$: Observable<Item | null>;

  constructor(private store: Store) {
    this.items$ = this.store.select(selectAllItems);
    this.store.select(selectLatestItem).subscribe(data => {
      if (data) {
        this.itemIdCounter = data.id + 1
      }
    });

  }

  ngOnInit() {
  }

  addItem() {
    const timestamp = new Date().toLocaleTimeString();
    const newItem: Item = {
      id: this.itemIdCounter,
      name: `Item ${this.itemIdCounter}`,
      timestamp
    };
    this.store.dispatch(addItem({ item: newItem }));
  }

  removeItem(id: number) {
    const itemId = id || 1;
    this.store.dispatch(removeItem({ id: itemId }));
  }

  clearItems() {
    this.store.dispatch(clearItems());
  }
}