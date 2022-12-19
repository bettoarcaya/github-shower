import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-commit-list',
  templateUrl: './commit-list.component.html',
  styleUrls: ['./commit-list.component.css']
})
export class CommitListComponent implements OnInit {
  commitList: Array<string> = [];

  constructor() { }

  ngOnInit(): void {
    this.getCommitList();
  }

  getCommitList() {
    this.commitList = [
      "one", "two", "three"
    ];
  }

}
