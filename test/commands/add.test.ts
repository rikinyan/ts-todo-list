import {runCommand} from '@oclif/test'
import {expect} from 'chai'

describe('add', () => {
  it('runs add cmd', async () => {
    const {stdout} = await runCommand('add')
    expect(stdout).to.contain('write todo\'s description.')
  })

  it('runs add with description arg', async () => {
    const {stdout} = await runCommand('add "todo description"')
    expect(stdout).to.contain('created TODO "todo description"')
  })
})
