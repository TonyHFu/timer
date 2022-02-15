const stdin = process.stdin;
// don't worry about these next two lines of setup work.
stdin.setRawMode(true);
stdin.setEncoding('utf8');

////////////////////////
stdin.on('data', (key) => {
  if (key === '\u0003') {
    process.stdout.write('\rThanks for using me, ciao!        \n');
    process.exit();
  }
  if (key === 'b') process.stdout.write('\x07');
  if (key >= 1 && key <= 9) {
    for (let count = 0; count <= key; count++) {
      process.stdout.write('\r                  timer set at ' + key);
      setTimeout(() => {
        process.stdout.write('\rcurrent time: ' + count);
      }, count * 1000);
    }
    setTimeout(() => {
      process.stdout.write('\x07');
    }, key * 1000);
  }
});



