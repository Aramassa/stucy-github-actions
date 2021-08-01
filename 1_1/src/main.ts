import * as core from '@actions/core'
import {wait} from './wait'

import chalk from "chalk";

async function run(): Promise<void> {
  try {
    const mesg: string = core.getInput("message");
    console.log(chalk.yellow(mesg));

    core.debug(chalk.yellow(mesg));

    core.setOutput('message', `messeage is ${mesg}`)
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()
