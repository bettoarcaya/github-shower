import { Injectable } from '@nestjs/common';
import { Octokit } from 'octokit';

@Injectable()
export class AppService {
  private octokit: Octokit;

  constructor() {
    this.octokit = new Octokit({});
  }

  async getCommitsFromRepo() {
    const ghResponse = await this.octokit.request(
      'GET /repos/{owner}/{repo}/commits{?sha,path,author,since,until,per_page,page}',
      {
        owner: 'bettoarcaya',
        repo: 'github-shower',
      },
    );
    return ghResponse;
  }
}
