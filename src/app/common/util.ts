import { Observable } from "rxjs";
import { Course } from "../model/course";

export function createHttpObservable(url: string){
  return new Observable ( subscriber => {
    fetch('http://localhost:9000/api/courses')
      .then(response => {
        return response.json();
      })
      .then(body => {
        subscriber.next(body);
        subscriber.complete();
      })
      .catch( err =>{
        subscriber.error(err);
      })
  } );
}
