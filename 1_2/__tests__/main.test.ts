
import * as core from '@actions/core'
import * as github from '@actions/github'

import * as process from 'process'
import * as cp from 'child_process'
import * as path from 'path'
import {expect, test} from '@jest/globals'

test('access git hub', async () => {
  // const token = core.getInput('token', {required: true})

  const token: string = process.env.GITHUB_TOKEN || "";

  const octokit = github.getOctokit(token);
  const { data: pullRequest } = await octokit.rest.pulls.get({
      owner: 'Aramassa',
      repo: 'study-github-actions',
      pull_number: 53,
      mediaType: {
        format: 'diff'
      }
  });


  console.log(pullRequest);
  
})
