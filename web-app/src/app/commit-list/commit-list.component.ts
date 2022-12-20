import { Component, OnInit } from '@angular/core';
import { CommitListService } from './commit-list.service';

@Component({
  selector: 'app-commit-list',
  templateUrl: './commit-list.component.html',
  styleUrls: ['./commit-list.component.css']
})
export class CommitListComponent implements OnInit {
  commitList: Array<{
    avatar: string,
    message: string,
    author: string,
    date: string
  }> = [];

  constructor(private commitListService: CommitListService) { }

  ngOnInit(): void {
    this.getCommitList();
  }

  getCommitList(): void {
    this.commitListService
        .getAllCommit()
        .subscribe({
          next: (res: any) => {
            this.commitList = res;
          }
        });
  }

}
