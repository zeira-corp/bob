// Description:
//   <description of the scripts functionality>
// ...
'use strict';

const fetch = require('node-fetch');


module.exports =  (robot) =>  {

  robot.messageRoom('general', 'Hello 🌍 I am BoB')
  
  robot.hear(/bob yo/, (res) => {
    res.send(`yo ${res.message.user.name}`);
  });

  robot.hear(/(?=.*make)(?=.*pullrequest)(?=.*on file)/i, (res) => {
    res.send(`🚧 ${res.message.user.name}`);
  });

  robot.hear(/tired|too hard|upset|bored/i, (res) => {
    res.send(`😡 ${res.message.user.name}`);
  });

  robot.hear(/bob help me with (.*)/i, (res) => {
    res.send(`help yourself with ${res.match[1]} 😜`);
  });

  robot.hear(/coucou bob (.*)/i, (res) => {
    res.send(`coucou ${res.message.user.name}`);
    fetch(`http://bob.local:8085/lcd`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        message: `coucou ${res.message.user.name}`
      })
    })
  });

  robot.hear(/(?=.*bob)(?=.*allumer)(?=.*led)(?=.*rouge)/i, (res) => {
    fetch(`http://bob.local:8085/led/red/switch/on`, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json"
      }
    });

    res.send(`🚧  ${res.message.user.name} 🤖  allume la led rouge`);
  });

  robot.hear(/(?=.*bob)(?=.*éteindre)(?=.*led)(?=.*rouge)/i, (res) => {
    fetch(`http://bob.local:8085/led/red/switch/off`, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json"
      }
    });

    res.send(`🚧  ${res.message.user.name} 🤖  éteind la led rouge`);
  });

  robot.hear(/(?=.*bob)(?=.*allumer)(?=.*led)(?=.*bleu)/i, (res) => {
    fetch(`http://bob.local:8085/led/blue/switch/on`, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json"
      }
    });

    res.send(`🚧  ${res.message.user.name} 🤖  allume la led bleue`);
  });

  robot.hear(/(?=.*bob)(?=.*éteindre)(?=.*led)(?=.*bleu)/i, (res) => {
    fetch(`http://bob.local:8085/led/blue/switch/off`, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json"
      }
    });

    res.send(`🚧  ${res.message.user.name} 🤖  éteind la led bleue`);
  });

  robot.hear(/(?=.*bob)(?=.*allumer)(?=.*led)(?=.*blanche)/i, (res) => {
    fetch(`http://bob.local:8085/led/white/switch/on`, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json"
      }
    });

    res.send(`🚧  ${res.message.user.name} 🤖  allume la led blanche`);
  });

  robot.hear(/(?=.*bob)(?=.*éteindre)(?=.*led)(?=.*blanche)/i, (res) => {
    fetch(`http://bob.local:8085/led/white/switch/off`, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json"
      }
    });

    res.send(`🚧  ${res.message.user.name} 🤖  éteind la led blanche`);
  });

  robot.hear(/(?=.*bob)(?=.*allumer)(?=.*tout)/i, (res) => {
    fetch(`http://bob.local:8085/led/white/switch/on`, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json"
      }
    });
    fetch(`http://bob.local:8085/led/blue/switch/on`, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json"
      }
    });
    fetch(`http://bob.local:8085/led/red/switch/on`, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json"
      }
    });

    res.send(`🚧  ${res.message.user.name} 🤖  allume tout`);
  });

  robot.hear(/(?=.*bob)(?=.*éteindre)(?=.*tout)/i, (res) => {
    fetch(`http://bob.local:8085/led/white/switch/off`, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json"
      }
    });
    fetch(`http://bob.local:8085/led/blue/switch/off`, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json"
      }
    });
    fetch(`http://bob.local:8085/led/red/switch/off`, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json"
      }
    });

    res.send(`🚧  ${res.message.user.name} 🤖  éteindre tout`);
  });

  // display the response of BoB
  robot.router.post(`/hey/iam/bob/:room`, (req, res) => {
    console.log(req.body, req.params);
    res.status(201).end();
  });

};
