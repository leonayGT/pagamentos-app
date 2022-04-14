import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagamentos',
  templateUrl: './pagamentos.component.html',
  styleUrls: ['./pagamentos.component.css']
})
export class PagamentosComponent implements OnInit {

  constructor() { }
  nome:string = ''
  salario:number = 0
  exibir:boolean = false

  salarioBruto(name:any,salary:number) {
    name.value = this.salario
    
  } 

  ngOnInit(): void {
  }

}
