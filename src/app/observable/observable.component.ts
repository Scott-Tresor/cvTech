import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit {

    monObservable: Observable<string>;
    image = [
        'nest.png',
        'nest.png',
        'nest.png',
        'nest.png',
        'nest.png',
    ];
    current: string;
  constructor() { }

  ngOnInit(): void {
      this.oberver();
  }

  oberver()
  {
    this.monObservable = new Observable(
        (observer)=>{
            let i = this.image.length - 1;
            setInterval(
                ()=>{
                    observer.next(this.image[i]);
                    if (i > 0) {
                        i--;
                    } else{
                        i = this.image.length - 1;
                    }
                }
            )
        }
    );
    this.monObservable.subscribe(
        (result)=>{
            console.log(result);
            this.current = result
        }
    );
  }

}
