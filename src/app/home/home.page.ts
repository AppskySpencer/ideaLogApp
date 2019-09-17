import { Component, OnInit } from '@angular/core';
import { IdeasService } from '../services/ideas.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  ideaList: string[];
  newIdea: string;

  constructor(private ideaService: IdeasService) {}

  ngOnInit() {
    // get ideas
    this.ideaList = this.ideaService.getIdeas();
  }

  // save new idea
  saveIdea() {
    if (!this.newIdea || this.newIdea.length === 0) {
      alert('You need to write what your idea is!');
    } else {
      this.ideaList = this.ideaService.saveNewIdea(this.newIdea);
      this.newIdea = '';
    }
  }

  clearList() {
    this.ideaList = this.ideaService.clearList();
  }


}
