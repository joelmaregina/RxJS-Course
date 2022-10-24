import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { concat, fromEvent, interval, merge, noop, Observable, of, timer } from 'rxjs';
import { map } from 'rxjs/operators';
import { createHttpObservable } from '../common/util';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    const http$ = createHttpObservable('http://localhost:9000/api/courses', );

    const sub = http$.subscribe(console.log)

    setTimeout(() => sub.unsubscribe(), 0);

    // // *************** MERGE *****************
    // const interval1$ = interval(1000);
    // const interval2$ = interval1$.pipe(map(val => 10 * val));
    // const result$ = merge(interval1$, interval2$);
    // result$.subscribe(console.log);

    // // ************** CONCAT *****************
    // const source1$ = of(1, 2, 3);
    // const source2$ = of(4, 5, 6);
    // const source3$ = of(7, 8, 9);
    // // Only a blueprint of an stream of values, its needed to subscribe:
    // const result$ = concat(source1$, source2$, source3$);

    // result$.subscribe(console.log);

    // // The Basics of streams (Fluxo de valores):
    // // Uma stream que vai ser executada todas as vezes que um click na página for executado (stream sem fim)
    // document.addEventListener('click', evt => {
    //   console.log(evt);
    // })

    // // Uma stream que será executada a cada 1 segundo (stream sem fim)
    // let counter = 0
    // setInterval(() =>{
    //   console.log(counter);
    //   counter++;
    // }, 1000);

    // // Uma stream se será execudada apenas 1 vez
    // setTimeout(() => {
    //   console.log("finished");
    // }, 3000);

    // // A definição de uma stream == Observable == 'interval$"
    // // É como se fosse um diagrama de como a stream irá se comportar quando a instanciarmos
    // // const interval$ = interval(3000); Emitirá a cada 3 segundos
    // const interval$ = timer(3000, 1000); // Emitirá o primerio em 3 segundos e os demais após 1 segundo
    // // Um observable apenas se tornará uma stream quando você se inscrever nela
    // const sub = interval$.subscribe(val => console.log("stream 1 => " + val));
    // setTimeout (() => sub.unsubscribe(), 5500);

    // // Stream of clicks
    // const click$ = fromEvent(document, 'click');
    // // Mais argumentos que podemos passar para o método subscribe:
    // click$.subscribe(
    //     evt => console.log(evt),
    //     err => console.log(err),
    //       () => console.log("Completed")
    //     );

  }
}

