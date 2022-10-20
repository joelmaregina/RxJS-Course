import {Component, OnInit} from '@angular/core';
import {Course} from "../model/course";
import {interval, noop, Observable, of, timer} from 'rxjs';
import {catchError, delayWhen, map, retryWhen, shareReplay, tap} from 'rxjs/operators';
import { createHttpObservable } from '../common/util';


@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  constructor() {

  }
    // Para uso Reativo:
    beginnerCourses$: Observable<Course[]>;
    advancedCourses$: Observable<Course[]>;
    // Para uso Imperativo
    // beginnerCourses: Course[];
    // advancedCourses: Course[]

  ngOnInit() {

    // Promisse (Fetch) - Bastante diferente de um Observable, uma Promise será executada imediatamente uma vez que foi definida
    // // Diferente de uma observable, que apenas irá executar em resposta a uma susbcrição
    // fetch('http://localhost:9000/api/courses');
    // Cria um observable do zero:
    // Create usa uma função que irá implementar o comportamento do nosso observable. Neste caso, uma função que fará o fetch da rede.
    // Observer é o que irá nos permitir emitir novos valores, gerar erro ou completar o observable
    const http$  = createHttpObservable('http://localhost:9000/api/courses');

    // O uso reativo
    const courses$ : Observable<Course[]> = http$
    .pipe(
      tap(() => console.log("HTTP request executed")),
      map(res => Object.values(res["payload"]) ),
      shareReplay<Course[]>()
      )

    this.beginnerCourses$ = courses$
      .pipe(
        map(courses => courses.filter(course => course.category == 'BEGINNER'))
    )

    this.advancedCourses$ = courses$
      .pipe(
        map(courses => courses.filter(course => course.category == 'ADVANCED'))
    )

    // // O uso Imperativo:
    // courses$.subscribe(
    //   courses => {
    //     this.beginnerCourses = courses.filter(course => course.category == 'BEGINNER');
    //     this.advancedCourses = courses.filter(course => course.category == 'ADVANCED');
    //   },
    //   noop, // No operation (to Error)
    //   () => console.log("Courses COMPLETED !")
    // )

    // http$.subscribe(
    //   courses => console.log(courses),
    //   noop, // No operation (to Error)
    //   () => console.log("COMPLETED !")
    // )

  }

}
