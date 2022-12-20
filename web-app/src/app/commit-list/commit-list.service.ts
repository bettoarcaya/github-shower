import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommitListService {

  constructor() { }

  getAllCommit() {
    return [
      {
        'date': '20/11/2022',
        'commits': [
          {
            'author': 'Humberto Arcaya',
            'message': 'text message example'
          },
          {
            'author': 'Humberto Arcaya',
            'message': 'text message example 2'
          },
          {
            'author': 'Humberto Arcaya',
            'message': 'very very long text message example 2'
          },
          {
            'author': 'Humberto Arcaya',
            'message': 'very very very very very long text message example 2'
          }
        ]
      },
      {
        'date': '19/11/2022',
        'commits': [
          {
            'author': 'Humberto Arcaya',
            'message': 'text message example'
          },
          {
            'author': 'Humberto Arcaya',
            'message': 'very very very very very long text message example 2'
          }
        ]
      },
      {
        'date': '18/11/2022',
        'commits': [
          {
            'author': 'Humberto Arcaya',
            'message': 'text message example'
          }
        ]
      }
    ];
  }
}
