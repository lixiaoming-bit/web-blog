// import striphtml from 'js-striphtml'

function counter(selector) {
  // const contentHTML = document.querySelector(selector).innerHTML
  // console.log('contentHTML: ', contentHTML);
  // const content = striphtml.stripTags(contentHTML)
  let content = document.querySelector(selector).innerText
  content = content.replace(/[\s]/g,'').trim()
  const cn = (content.match(/[\u4E00-\u9FA5]/g) || []).length
  const en = (
    content
    .replace(/[\u4E00-\u9FA5]/g, '')
    .match(
      /[a-zA-Z0-9_\u0392-\u03c9\u0400-\u04FF]+|[\u4E00-\u9FFF\u3400-\u4dbf\uf900-\ufaff\u3040-\u309f\uac00-\ud7af\u0400-\u04FF]+|[\u00E4\u00C4\u00E5\u00C5\u00F6\u00D6]+|\w+/g
      ) || []
      ).length
  return [cn, en]
}

export function min2read(selector, { cn = 300, en = 160 } = {}) {
  const len = counter(selector)
  const readingTime = len[0] / cn + len[1] / en
  return readingTime < 1 ? '1' : parseInt(readingTime, 10)
}

export function wordcount(selector) {
  const len = counter(selector)
  const count = len[0] + len[1]
  if (count < 1000) {
    return count
  }
  return Math.round(count / 100) / 10 + 'k'
}
