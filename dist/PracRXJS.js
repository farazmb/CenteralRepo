import { Observable } from 'rxjs';
const obs$ = new Observable(sub => sub.next('Hello World!'));
obs$.subscribe(val => console.log(val));
//# sourceMappingURL=PracRXJS.js.map