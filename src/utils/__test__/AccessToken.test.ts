/**
 * Created by simon on 2017/3/5.
 */
import AccessToken from '../AccessToken'
import * as _ from 'lodash'

describe('测试 AccessToken', () => {
  it('必须包含', () => {
    _.includes(AccessToken.ACCESS_TOKEN, AccessToken.ensureAccessToken())
  })
})

describe('AccessToken test', () => {
  it('必须不能相等', () => {
    expect(AccessToken.ensureAccessToken()).not.toBe(null)
    expect(AccessToken.ensureAccessToken()).not.toBe('')
    expect(AccessToken.ensureAccessToken()).not.toBe('adjsiaf')
    expect(AccessToken.ensureAccessToken()).not.toBe(1374123478)
  })
})
