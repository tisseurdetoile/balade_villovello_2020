function share_social(socialNetwork, msg, via) {
  const escUrl = encodeURIComponent(window.location.href)
  const escMsg = encodeURIComponent(msg)
  const escTitle = encodeURIComponent(document.title)

  var url = ''

  switch (socialNetwork) {
    case 'facebook':
      url = 'https://www.facebook.com/share.php?u=' + escUrl
      break
    case 'twitter':
      url =
        'https://twitter.com/intent/tweet?url=' +
        escUrl +
        '&text=' +
        escTitle +
        (escMsg && escTitle ? '%20-%20' : '') +
        escMsg
      if (via) url += '&via=' + via.replace('@', '')
      break
    case 'tumblr':
      url =
        'https://www.tumblr.com/share/link?url=' +
        escUrl +
        '&name=' +
        escTitle +
        '&description=' +
        escMsg
      break
    case 'email':
      url =
        'mailto:?subject=' +
        escTitle +
        '&body=' +
        '%0A' +
        escUrl +
        '%0A%0A' +
        escMsg +
        '%0A'
      break
    case 'wathsapp':
      url =
        'whatsapp://send?text=' +
        escUrl +
        '%20-%20' +
        escTitle +
        (escMsg && escTitle ? '%20-%20' : '') +
        escMsg
      break
  }
  window.open(url, '_blank')
}
