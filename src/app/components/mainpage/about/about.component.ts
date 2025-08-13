import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
    selector: 'app-about',
    imports: [CommonModule],
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.css']
})
export class AboutComponent {
    age: number;
    skills: string[];

    constructor() {
        let timeDiff = new Date().getTime() - new Date("2003-01-06").getTime();
        this.age = Math.floor((timeDiff / (1000 * 3600 * 24))/365);
        this.skills = [
            "Java",
            "Python",
            "C#",
            "Angular",
            "Blazor",
            "Docker",
            "Algorithms and Data Structures",
            "Object Oriented Programming",
            "REST APIs",
            "ViM",
            "Git",
            "Linux",
            "SQL and NoSQL Databases",
            "HTML, CSS and JavaScript"
        ];
    }

}
