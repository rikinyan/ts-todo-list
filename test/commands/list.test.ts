import {runCommand} from '@oclif/test'
import {expect} from 'chai'

describe('list', () => {
  it('runs list cmd', async () => {
    await runCommand('add "test"')

    const {stdout} = await runCommand('list')
    expect(stdout).to.contain('[] test1\n[] test2')
  })
})
