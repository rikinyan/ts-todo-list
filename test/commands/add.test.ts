import {runCommand} from '@oclif/test'
import {sharedDbConnection} from "../../src/db/ConnectDatabase.js"
import {expect} from 'chai'

describe('add', () => {
  beforeEach(async () => {
    await sharedDbConnection.deleteFrom("todos").execute()
  })

  it('runs add cmd', async () => {
    const {stdout} = await runCommand('add')
    expect(stdout).to.contain('write todo\'s description.')
  })

  it('runs add with description arg', async () => {
    const {stdout} = await runCommand('add "todo description"')
    expect(stdout).to.contain('created TODO "todo description"')
  })
})
