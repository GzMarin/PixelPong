// Basic canvas setup
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// You can expand this later with game logic!
ctx.fillStyle = '#44ffcc';
ctx.font = '20px Courier New';
ctx.textAlign = 'center';
ctx.fillText('PixelPong - Coming Soon!', canvas.width / 2, canvas.height / 2);
