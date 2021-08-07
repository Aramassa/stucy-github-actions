import * as core from '@actions/core'
import * as github from '@actions/github'
import {wait} from './wait'
import {Sample} from './sample'

async function run(): Promise<void> {
  try {
    const token: string =
      core.getInput('token') || process.env.GITHUB_TOKEN || ''
    const owner: string = core.getInput('owner')
    const repo: string = core.getInput('repo')

    const s: Sample = new Sample(token, owner, repo)

    const issueNumber: string = core.getInput('issuer_number') || '2'
    await s.createFile(issueNumber)
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()
