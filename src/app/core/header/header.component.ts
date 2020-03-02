import { Component, Inject } from '@angular/core';
import { Router, ActivatedRoute, RouterModule, Params, RoutesRecognized } from '@angular/router';
import { HostListener } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})

// @HostListener('window:scroll', ['$event']);
// onWindowScroll(e) {
//     console.log('scroll called')
//        // let element = document.querySelector('.navbar');
//        // if (window.pageYOffset > element.clientHeight) {
//        //     element.classList.add('navbar-inverse');
//        // } else {
//        //     element.classList.remove('navbar-inverse');
//        // }
//    }

export class HeaderComponent {
    isNavBarFixed: boolean = false;
    
    constructor(private activatedRoute: ActivatedRoute) {

    }
    @HostListener("window:scroll", [])
    onWindowScroll() {
        window.pageYOffset < 85 ? this.isNavBarFixed = false : this.isNavBarFixed = true
    }
    ngOnInit() {

    }
    ngOnDestroy() {

    }

}
