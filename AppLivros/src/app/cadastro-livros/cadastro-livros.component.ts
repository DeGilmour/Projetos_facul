import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro-livros',
  templateUrl: './cadastro-livros.component.html',
  styleUrls: ['./cadastro-livros.component.css'],
})
export class CadastroLivrosComponent implements OnInit {
  
  public titulo;num_paginas;autor;cadastro_feito =  false;livro = [];livro_self;
  constructor() { }
  

  ngOnInit(): void {
  }

  
  showData(){
    this.cadastro_feito = true
    var livro_dict = {titulo : this.titulo, autor: this.autor, num_paginas : this.num_paginas}
    this.livro.push(livro_dict)
    // localStorage.setItem("livro_criado",JSON.stringify(this.livro))
    // this.livro_self = localStorage.getItem("livro_criado")
  }
}
