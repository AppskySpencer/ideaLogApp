import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IdeasService {

  constructor() { }

  getIdeas() {
    if (!JSON.parse(localStorage.getItem('ideas'))) {
      localStorage.setItem('ideas', '[]');
    }
    return JSON.parse(localStorage.getItem('ideas'));
  }

  saveNewIdea(idea) {
    const ideaList = this.getIdeas();
    ideaList.push(idea);
    localStorage.setItem('ideas', JSON.stringify(ideaList));
    return ideaList;
  }

  clearList() {
    localStorage.setItem('ideas', '[]');
    return [];
  }
}
