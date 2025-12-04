import {runCommand} from '@oclif/test'
import {sharedDbConnection} from "../../src/db/ConnectDatabase.js"
import {expect} from 'chai'

describe('remove', () => {
  beforeEach(async () => {
    await sharedDbConnection.deleteFrom("todos").execute()
  })

  it('runs remove cmd', async () => {
    await runCommand('add "todo1"')
    await runCommand('add "todo2"')

    const results = await sharedDbConnection
      .selectFrom("todos")
      .selectAll()
      .execute()

    expect(results).to.have.length(2)

    const deletedId = results[0].id.toString()

    await runCommand(`remove ${deletedId}`)

    const afterDeleted = await sharedDbConnection
      .selectFrom("todos")
      .selectAll()
      .execute()

    expect(afterDeleted).to.have.length(1)
  })
})
