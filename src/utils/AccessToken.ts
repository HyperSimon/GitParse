import * as Random from 'random-js'
import GitHub from 'github-api';
var json = require('../../token.json') // add a token.json to your root

/**
 * Created by simon on 2017/3/5.
 */
export default class AccessToken {
  public static readonly ACCESS_TOKEN = json

  /**
   * 随机返回一个 Access Token
   * @returns {string|string|string|string|string|string}
   */
  public static ensureAccessToken(): string {
    const random = new Random()
    const index = random.integer(0, AccessToken.ACCESS_TOKEN.length)
    return AccessToken.ACCESS_TOKEN[index]
  }
}
