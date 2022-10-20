import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { fromEvent, interval, noop, Observable, timer } from 'rxjs';
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

