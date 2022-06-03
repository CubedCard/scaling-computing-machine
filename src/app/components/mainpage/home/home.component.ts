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
    readonly DELAY: number = 10000;
    setup: string;
    punch: string;
    interval: any;

    constructor(private http: HttpClient) { 
        this.setup = "";
        this.punch = "";
    }

    ngOnInit(): void {
        this.fetchJoke();
        this.startTimedJoke();
    }

    fetchJoke() {
        this.getJoke().subscribe((joke: Joke) => {
            this.setup = joke.setup;
            this.punch = joke.delivery;
        });
    }

    jokeSource(): void {
        window.open('https://v2.jokeapi.dev/', '_blank');
    }

    private getJoke(): Observable<Joke> {
        return this.http.get<Joke>("https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=twopart");
    }

    private startTimedJoke() {
        this.interval = setInterval(() => {
            this.fetchJoke();
        }, this.DELAY); 
    }

    ngOnDestroy(): void {
        clearInterval(this.interval);
    }

}
