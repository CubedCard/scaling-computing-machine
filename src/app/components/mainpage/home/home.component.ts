import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Joke } from '../../../models/joke';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    setup: string;
    punch: string;

    constructor(private http: HttpClient) { 
        this.setup = "";
        this.punch = "";
    }

    ngOnInit(): void {
        this.getJoke().subscribe((joke: Joke) => {
            console.log(joke);
            this.setup = joke.setup;
            this.punch = joke.delivery;
        });
        this.startTimedJoke();
    }

    getJoke(): Observable<Joke> {
        return this.http.get<Joke>("https://v2.jokeapi.dev/joke/Programming,Christmas?type=twopart");
    }

    startTimedJoke() {
        setInterval(() => {
            this.getJoke().subscribe((joke: Joke) => {
                console.log(joke);
                this.setup = joke.setup;
                this.punch = joke.delivery;
            });
        }, 7000); 
    }

}
