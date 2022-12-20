import { Component, OnInit } from '@angular/core';
import { CommitListService } from './commit-list.service';

@Component({
  selector: 'app-commit-list',
  templateUrl: './commit-list.component.html',
  styleUrls: ['./commit-list.component.css']
})
export class CommitListComponent implements OnInit {
  commitList: any = [];

  constructor(private commitListService: CommitListService) { }

  ngOnInit(): void {
    this.getCommitList();
  }

  getCommitList() {
    this.commitList = this.commitListService.getAllCommit();
  }

}
