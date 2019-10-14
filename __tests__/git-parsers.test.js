const { packageJSONDiffLogs: mockGitLogs } = require('./fixtures')
let fetchAndParseGitLogs

jest.mock('../lib/utils', () => ({
  execute: () => Promise.resolve(mockGitLogs),
}))

describe(`fetchAndParseGitLogs`, () => {
  beforeEach(() => {
    const mockMath = Object.create(global.Math)
    mockMath.random = () => 0.31
    global.Math = mockMath
    jest.resetModules()
    fetchAndParseGitLogs = require('../lib/git-parsers').fetchAndParseGitLogs
  })

  it(`should parse the git logs into a JS structure`, async () => {
    const parsedLogs = await fetchAndParseGitLogs('./package.json')
    debugger //eslint-disable-line
    expect(parsedLogs).toMatchSnapshot()
  })
})
