import { Component, EventEmitter, Output, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styles: [
  ]
})
export class InputComponent implements OnInit {

  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebaunce: EventEmitter<string> = new EventEmitter();
  @Input() placeholder: string = '';
  termino: string = '';
  debouncer: Subject<string> = new Subject();

  ngOnInit(): void {
    this.debouncer
    .pipe(debounceTime(300))
    .subscribe( valor => {
      this.onDebaunce.emit(valor)
    })
  }
  buscar(){
    this.onEnter.emit( this.termino );
  }

  teclaPresionada(){
    this.debouncer.next( this.termino);
  }
}
