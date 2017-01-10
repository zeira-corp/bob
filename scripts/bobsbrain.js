// Description:
//   <description of the scripts functionality>
// ...
'use strict';

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
    res.send(`🤖 ${res.match[1]} 😜`);
  });

  robot.hear(/(?=.*coucou bob)(?=.*allume)(?=.*led)(?=.*rouge)/i, (res) => {
    fetch(`http://bob.local:8085/led/red/blink`, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json"
      }
    });

    res.send(`🚧 ${res.message.user.name} 🤖 allume la led rouge`);
  });

  robot.hear(/(?=.*coucou bob)(?=.*allume)(?=.*led)(?=.*bleu)/i, (res) => {
    fetch(`http://bob.local:8085/led/blue/blink`, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json"
      }
    });

    res.send(`🚧 ${res.message.user.name} 🤖 allume la led bleue`);
  });

  robot.hear(/(?=.*coucou bob)(?=.*allume)(?=.*led)(?=.*blanche)/i, (res) => {
    fetch(`http://bob.local:8085/led/white/blink`, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json"
      }
    });

    res.send(`🚧 ${res.message.user.name} 🤖 allume la led blanche`);
  });

  // display the response of BoB
  robot.router.post(`/hey/iam/bob/:room`, (req, res) => {
    console.log(req.body, req.params);
    res.status(201).end();
  });

};
