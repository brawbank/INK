import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent {
  activeItem: string = 'home';

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.setActive('color-space')
  }

  setActive(item: string): void {
    this.activeItem = item;
    let features = 'features/'+ item
    this.router.navigate([features]);
  }

  isActive(item: string): boolean {
    return this.activeItem === item;
  }

  logout(){
    localStorage.clear();
    this.router.navigate(['/main']);
  }


}
