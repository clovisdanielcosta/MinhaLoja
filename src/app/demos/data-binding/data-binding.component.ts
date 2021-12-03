import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styles: [
  ]
})
export class DataBindingComponent {

  public contadorClique: number = 0;
  public urlImagem: string = "https://angular.io/assets/images/logos/angular/angular.svg";
  public nome: string="";
  public nome1: string="";
  public nome3: string="";



  adicionarClique(){
    this.contadorClique++;
  }

  zerarContador(){
    this.contadorClique = 0;
  }

  desapertarTecla(event1: any){
    this.nome1 = event1.target.value;
    
  }

}
