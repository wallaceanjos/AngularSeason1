import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent implements OnInit {

  url: any = 'http://google.com';
  cursoAngular: boolean = true;
  urlImage = 'http://lorempixel.com/400/200/nature/';
  valorAtual: string = '';
  valorSalvo: string = '';
  isMouseOver: boolean = false;

  nomeCurso : string = 'Angular'

  valorInicial = 15;
  
  getValor(){
    return 1;
  }

  getCurtirCurso(){
    return true;
  }

  botaoClicado(){
    alert('Botão clicado!');
  }

  onKeyUp(event: KeyboardEvent){
    console.log()
    this.valorAtual = (<HTMLInputElement>event.target).value;
  }

  salvarValor(valor: any){
    this.valorSalvo = valor;
  }

  onMouseOverOut(){
    this.isMouseOver = !this.isMouseOver;
  }

  onMudouValor(evento: any){
    console.log(evento.novoValor)
  }


  constructor() { }

  ngOnInit(): void {
  }

}
