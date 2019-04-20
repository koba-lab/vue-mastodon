/**
 * 表示関係のヘルパー
 */
export default {
  /**
   * 表示名の取得
   * @param {Object} user 
   */
  getName(user) {
    return (user.display_name) ? user.display_name : user.username 
  },

  /**
   * 絵文字を反映させた表示名の取得
   * @param {Object} user 
   */
  getNameHtml(user) {
    // 文字列をエスケープして取得
    let name = this.getName(user)
      .replace(/</g,"&lt;")
      .replace(/>/g,"&gt;")
      .replace(/ /g, "&nbsp;")
      .replace(/\r/g, "&#13;")
      .replace(/\n/g, "&#10;");

    // 絵文字部分だけHTML化
    user.emojis.forEach(emoji => {
      name = name.replace(new RegExp(`:${emoji.shortcode}:`, 'g'), `<img class="emoji" src="${emoji.static_url}" alt="${emoji.shortcode}"></img>`)
    })
    return name.trim()
  }
}
