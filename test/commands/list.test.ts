import {runCommand} from '@oclif/test'
import {expect} from 'chai'

describe('list', () => {
  it('runs list cmd', async () => {
    await runCommand('add "list-test-todo"')

    const {stdout} = await runCommand('list')
    expect(stdout).to.contain('[] test1\n[] test2')
  })
})
