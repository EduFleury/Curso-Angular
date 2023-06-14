import { ListService } from './../../services/list.service';
import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/Animal';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.scss']
})
export class ListRenderComponent implements OnInit {
  animals: Animal[] = [];

  constructor(private listService: ListService) {
    this.getAnimals();
  }

  getAnimals(): void{
    this.listService.getAll().subscribe((animals) => (this.animals = animals));
  }

  ngOnInit(): void {
  }

  animalDetails = ''

  showCor(animal:Animal){
    this.animalDetails = "o pet tem a cor "+animal.cor+"."
  }

  removeAnimal(animal:Animal){
    console.log("removendo animal")
    this.animals = this.listService.remove(this.animals, animal)
  }

}
