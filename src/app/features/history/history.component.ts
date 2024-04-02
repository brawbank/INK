import { Component } from '@angular/core';
import { historyList } from './history';
import { ink } from '../ink-amount/inkData';
import { Router } from '@angular/router';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent {
  constructor(private router: Router) { }

  historyList = ink

  detail(id: number): void {
    this.router.navigate(['/features/ink-amount', id]);
}
}
