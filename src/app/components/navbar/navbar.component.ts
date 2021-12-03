import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
window.addEventListener('DOMContentLoaded', event => {
  let navv = true;
  const navbarShrink = () => {
    const navbarCollapsible = document.body.querySelector('#mainNav');
    if (!navbarCollapsible) {
        return;
    }
    if (window.scrollY === 0) {
        navv = true;
        navbarCollapsible.classList.remove('navbar-shrink');


    } else {
      navv = false;
      navbarCollapsible.classList.add('navbar-shrink');
    }

};
  navbarShrink();
  document.addEventListener('scroll', navbarShrink);
});
