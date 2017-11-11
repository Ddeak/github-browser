import base64 from 'base-64'

export const LOGIN = 'LOGIN'

export function login () {
  return { type: LOGIN }
}

export const LOGGED_IN = 'LOGGED_IN'

export function loggedIn (token) {
  return { type: LOGGED_IN, token: token }
}

export const PROFILE = 'PROFILE'

export function loadProfile () {
  return { type: PROFILE }
}

export const GOT_PROFILE = 'GOT_PROFILE'

export function gotProfile (profile) {
  return { type: GOT_PROFILE, profile: profile }
}

export function doLogin (user) {
  return (dispatch) => {
    dispatch(login())
    const config = {
      GITHUB_CLIENT_ID: '653bf90a3e55b6d2c1ef',
      GITHUB_CLIENT_SECRET: 'ae5bd8259c3314d6d0963517d41b306aa7eba293',
      AUTH_URL: 'https://api.github.com/authorizations'
    }

    const bytes = user.username.trim() + ':' + user.password.trim()
    const encoded = base64.encode(bytes)

    let headers = {
      'Authorization': 'Basic ' + encoded,
      'User-Agent': 'GitHub Issue Browser',
      'Content-Type': 'application/json; charset=utf-8'
    }

    if (user.twofactor) {
      headers['X-GitHub-OTP'] = `${user.twofactor}`
    }

    return fetch (config.AUTH_URL, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify({
        'client_id': config.GITHUB_CLIENT_ID,
        'client_secret': config.GITHUB_CLIENT_SECRET,
        'scopes': ['user', 'repo'],
        'note': 'not abuse'
      })
    })
    .then((response) => {
      const isValid = response.status < 400
      return response.json()
    .then((json) => {
      if (isValid) {
        dispatch(loggedIn(json.token))
        dispatch(getProfile(json.token))
        dispatch(getOrganisations(json.token))
        dispatch(getRepositories(json.token))
      } else {
        throw new Error(json.message)
      }
    })
    .catch((error) => {
      console.log(error)
    })
    })
  }
}

export function getProfile (token) {
  return (dispatch) => {
    dispatch(loadProfile())
    return fetch(`https://api.github.com/user?access_token=${token}`, {
      method: 'GET'
    })
    .then((response) => {
      const isValid = response.status < 400
      return response.json()
    .then((json) => {
      if (isValid) {
        dispatch(gotProfile(json))
      } else {
        throw new Error(json.message)
      }
    })
    .catch((error) => {
      console.log(error)
    })
    })
  }
}

export const ORGANISATIONS = 'ORGANISATIONS'

export function loadOrganisations () {
  return { type: ORGANISATIONS }
}

export const GOT_ORGANISATIONS = 'GOT_ORGANISATIONS'

export function gotOrganisations (organisations) {
  return { type: GOT_ORGANISATIONS, organisations: organisations }
}

export function getOrganisations (token) {
  return (dispatch) => {
    dispatch(loadOrganisations())
    return fetch(`https://api.github.com/user/orgs?access_token=${token}`, {
      method: 'GET'
    })
    .then((response) => {
      const isValid = response.status < 400
      return response.json()
    .then((json) => {
      if (isValid) {
        dispatch(gotOrganisations(json))
      } else {
        throw new Error(json.message)
      }
    })
    .catch((error) => {
      console.log(error)
    })
    })
  }
}

export const REPOSITORIES = 'REPOSITORIES'

export function loadRepositories () {
  return { type: REPOSITORIES }
}

export const GOT_REPOSITORIES = 'GOT_REPOSITORIES'

export function gotRepositories (repositories) {
  return { type: GOT_REPOSITORIES, repositories: repositories }
}

export function getRepositories (token) {
  return (dispatch) => {
    dispatch(loadRepositories())
    return fetch(`https://api.github.com/user/repos?access_token=${token}`, {
      method: 'GET'
    })
    .then((response) => {
      const isValid = response.status < 400
      return response.json()
    .then((json) => {
      if (isValid) {
        console.log(json)
        dispatch(gotRepositories(json))
      } else {
        throw new Error(json.message)
      }
    })
    .catch((error) => {
      console.log(error)
    })
    })
  }
}

export function getLatestCommit (userId, repositoryId) {
}
