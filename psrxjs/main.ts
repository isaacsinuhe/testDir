import {Observable, Observer} from "rxjs"
import {load, loadWithFetch} from './loader'

let source = Observable.create( (observer: Observer<number>) => {
    observer.next(1)
    observer.next(2)
    observer.complete()
})

let subscription1 = source.subscribe( 
    (value: number) => console.log(`value ${value}`),
    (error: Error) => console.log(`error: ${error}`),
    () => console.log('complete')
    )

let subscription2 = source.subscribe(
    (value: number) => console.log(`value ${value}`),
    (error: Error) => console.log(`error: ${error}`),
    () => console.log('complete')
)

let output = <HTMLDivElement>document.getElementById('output')
let button = <HTMLButtonElement>document.getElementById('button')

let click = Observable.fromEvent(button, 'click')


function renderMovies (movies: Array<Movie>) {
    movies.forEach((m: Movie) => {
        let div = document.createElement('div')
        div.innerText = m.title;
        output.appendChild(div)
    });
}

click.flatMap(e => load('movies.json'))
    .subscribe({next: renderMovies})

interface myEvt {
    x: number,
    y: number
}

interface Movie {
    title: string
}

// function onNext ({x, y}: myEvt) {
//     circle.style.left = x.toString()
//     circle.style.top = y.toString()
// }