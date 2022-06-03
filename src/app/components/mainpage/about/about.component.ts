import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
    age: number;
    skills: string[];

    constructor() {
        let timeDiff = new Date().getTime() - new Date("2003-01-06").getTime();
        this.age = Math.floor((timeDiff / (1000 * 3600 * 24))/365);
        this.skills = [
            "Java",
            "Angular",
            "Spring Boot",
            "Algorithms and Data Structures",
            "Docker",
        ];

    }

    ngOnInit(): void {
    }

}
