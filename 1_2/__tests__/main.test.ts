import * as github from '@actions/github'
import * as core from '@actions/core'
import YAML from 'yaml';
import fs from 'fs'

import {Sample} from '../src/sample';

import * as process from 'process'
import * as cp from 'child_process'
import * as path from 'path'
import {expect, test} from '@jest/globals'

test('access git hub', async () => {

  const token: string = process.env.GITHUB_TOKEN || "";
  const owner: string = core.getInput('owner');
  const repo: string = core.getInput('repo');

  const s:Sample = new Sample(token, owner, repo);

  const issueNumber: string = core.getInput('issuer_number') || "2";

  await s.createFile(issueNumber);
})
