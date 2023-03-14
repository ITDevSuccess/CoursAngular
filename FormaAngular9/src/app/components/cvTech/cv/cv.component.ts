import { PremierService } from './../../service/premier.service';
import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/models/Person';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {

  personnes: Person[];
  selectedPersonne: Person;
  constructor(
    private premierService: PremierService
  ) { }

  ngOnInit(): void {
    this.personnes = [
      new Person(1, 'Muriel', 'TSIDIANY', 22, "tim_logo.png", 256525666, 'Developper'),
      new Person(2, 'Fatima', 'FANO', 21, "tim_logo.png", 25252525, 'Teacher'),
      new Person(3, 'Inconnu', 'Test', 45, "", 252522825, 'Formateur'),
    ];
    this.premierService.addData('Data from cv component');
    this.premierService.logger(this.personnes);
  }

  selectPersonne(personne){
    this.selectedPersonne =  personne;
  }

}
