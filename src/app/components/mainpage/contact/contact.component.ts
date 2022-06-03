import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
    email: string;
    tel: string;
    linkedIn: string;
    insta: string;
    github: string;

    constructor() {
        this.email = "jip.derksen@hva.nl";
        this.tel = "+31 6 12345678";
        this.linkedIn = "https://www.linkedin.com/in/jipderksen";
        this.insta = "https://www.instagram.com/jipderksen";
        this.github = "https://www.github.com/CubedCard";
    }

    ngOnInit(): void {
    }

}
