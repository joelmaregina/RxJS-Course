import { ObserversModule } from "@angular/cdk/observers";
import { Observable } from "rxjs";
import { Course } from "../model/course";

export function createHttpObservable(url){
  return new Observable ( subscriber => {

    const controller = new AbortController();
    const signal = controller.signal;

    fetch(url, {signal})
      .then(response => {
        if(response.ok){
            return response.json();
        } else {
          subscriber.error('Request failed with status code: ' + response.status);
        }
      })
      .then(body => {
        subscriber.next(body);
        subscriber.complete();
      })
      .catch( err =>{
        subscriber.error(err);
      });

      return () => controller.abort()
  });

}

