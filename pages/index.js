import React from 'react'

window.fbAsyncInit = function () {
  FB.init({
    appId: '293604811359850',
    cookie: true,
    xfbml: true,
    version: 'v3.2'
  })

  FB.AppEvents.logPageView()
};

(function (d, s, id) {
  var js; var fjs = d.getElementsByTagName(s)[0]
  if (d.getElementById(id)) { return }
  js = d.createElement(s); js.id = id
  js.src = 'https://connect.facebook.net/en_US/sdk.js'
  fjs.parentNode.insertBefore(js, fjs)
}(document, 'script', 'facebook-jssdk'))

class componentName extends React.Component {
  render () {
    return (
      <div>
      </div>
    )
  }
}

componentName.propTypes = {

}

export default componentName
