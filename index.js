const mineflayer = require('mineflayer');

const bot = mineflayer.createBot({
  host: 'kediciklerr.aternos.me', // Aternos sunucu IP'n
  port: 24277,                         // Port numaran
  username: 'GitHub_AFK_Bot',
  version: false
});

bot.on('spawn', () => {
  console.log('Bot oyuna girdi!');
  // Hareketsizlikten atılmamak için zıplama döngüsü
  setInterval(() => {
    bot.setControlState('jump', true);
    setTimeout(() => bot.setControlState('jump', false), 500);
  }, 20000);
});

bot.on('error', err => console.log('Hata:', err));
bot.on('end', () => console.log('Bot sunucudan ayrıldı.'));
