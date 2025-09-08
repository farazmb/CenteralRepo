import { firstValueFrom, interval, Observable, of } from 'rxjs';
//const numbers$ = interval(1000 );
//  numbers$.subscribe(num => console.log(`I ${num} dog shit`));
// const numbers$ = of(10, 20, 30);
// numbers$.subscribe({
//   next: val => console.log('Value:', val),
//   complete: () => console.log('Stream ended')
// });
// const nums$ = of(100, 200, 300, 400, 500, 600, 700, 800, 900);
// nums$.subscribe({
//     next: val => console.log('Number:', val),
//     complete: () => console.log('Number stream ended')
// })
//stream example
// const numbers$ = interval(1000);
// const subscription = numbers$.subscribe({
//     next: val => console.log('Interval Value:', val),
//     complete: () => console.log('Interval stream ended')
// })
//overservables
const hello$ = new Observable(subscriber => {
    subscriber.next('Hello');
    subscriber.next('World');
    subscriber.complete();
});
hello$.subscribe({
    next: val => console.log('Message:', val),
    complete: () => console.log('Message stream ended')
});
const res = await firstValueFrom(hello$);
console.log('First Value from hello$:', res);
//# sourceMappingURL=PracRXJS.js.map