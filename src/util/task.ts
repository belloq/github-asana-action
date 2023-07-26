// @ts-ignore
import { context } from '@actions/github'

const TASK_REGEX = new RegExp('https:\\/\\/app.asana.com\\/(\\d+)\\/(?<project>\\d+)\\/(?<task>\\d+)', 'g')

export function parseTaskId() {
  const pullRequest = context.payload.pull_request
  const res = TASK_REGEX.exec(pullRequest?.body || '')
  return res?.groups?.task
}

