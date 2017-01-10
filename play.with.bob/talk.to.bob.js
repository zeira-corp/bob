#!/usr/bin/env node
const fetch = require('node-fetch');

let hubot_url = `http://localhost:8082/receive`

fetch(`${hubot_url}/general`, {
  method: 'POST',
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    from: "@k33g_org",
    message: "bob help me with java"
  })
})

fetch(`${hubot_url}/random`, {
  method: 'POST',
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    from: "@k33g_org",
    message: "I'm upset"
  })
})

fetch(`${hubot_url}/random`, {
  method: 'POST',
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    from: "@k33g_org",
    message: "Hey Babs, could you make please a pullrequest on file hello.js?"
  })
})

fetch(`${hubot_url}/general`, {
  method: 'POST',
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    from: "@k33g_org",
    message: "bob yo"
  })
})

fetch(`${hubot_url}/general`, {
  method: 'POST',
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    from: "@k33g_org",
    message: "coucou bob allume lampe rouge"
  })
})
