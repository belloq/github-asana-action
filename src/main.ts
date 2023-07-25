import * as core from '@actions/core'
import asana from 'asana'
import { parseTaskId } from './util/task'

async function run(): Promise<void> {
  try {
    const secret = core.getInput('asana_secret')
    const action = core.getInput('action')

    const client = asana.Client.create().useAccessToken(secret)
    const taskId = parseTaskId()

    if (!taskId) {
      core.info('Asana Task not found')
      return
    }

    switch (action) {
      case 'add-comment':
        const commentText = core.getInput('comment-text', { required: true })
        const commentPinned = core.getBooleanInput('comment-pinned')
        client.stories.createOnTask(taskId, {
          text: commentText,
          is_pinned: commentPinned
        }).catch(() => {
          core.setFailed('Failed to create the comment')
        })

        break

      case 'update-custom-field':
        const customFieldId = core.getInput('custom-field-id', { required: true })
        const customFieldValue = core.getInput('custom-field-value', { required: true })
        client.tasks.updateTask(taskId, {
          custom_fields: {
            [customFieldId]: customFieldValue
          }
        }).catch(() => {
          core.setFailed('Failed to update the custom field')
        })

      default:
        break
    }
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message)
  }
}

run()
