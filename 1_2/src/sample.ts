import * as github from '@actions/github'
import * as core from '@actions/core'
import YAML from 'yaml';
import fs from 'fs'

export class Sample {

  private token:string;
  private owner:string;
  private repo:string;

  constructor(token: string, owner:string, repo:string){
    this.token = process.env.GITHUB_TOKEN || "";
    this.owner = core.getInput('owner');
    this.repo = core.getInput('repo');
  }

  async getIssue(issueNumber:string){
    const octokit = github.getOctokit(this.token);
    return await octokit.rest.issues.get({
      owner: this.owner || "Aramassa",
      repo: this.repo || "study-github-actions",
      issue_number: Number(issueNumber),
    });
  }

  async createFile(issueNumber: string){
    
    const { data: issue } = await this.getIssue(issueNumber);

    let body:string = issue.body || "";
    let matched = body.match(/```(.*?)```/sm);
    if(matched){
      let prog:string = matched[1].replace(/\r\n?/g,"\n").replace(/^\n+/, '').replace(/\n+$/, '')

      const yaml = YAML.parse(fs.readFileSync('./tpl/1.yml', 'utf8'))
      yaml.spec.workflowSpec.templates[0].container.command = prog ;
      
      // console.log(YAML.stringify(yaml));
      fs.writeFileSync('./tpl/1_2.yml', YAML.stringify(yaml));

    } else {
      core.setFailed(`処理内容の記載がありません`);
      // TODO エラー終了させる
    }
  }

  

}