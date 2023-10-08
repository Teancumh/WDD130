
const canvas = document.getElementById('game');
const context = canvas.getContext('2d');
var centerX = canvas.width / 2;
      var centerY = canvas.height / 2;
      var radius = 70;

      context.beginPath();
      context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
      context.fillStyle = 'blue';
      context.fill();
      //context.lineWidth = 0;
      //context.strokeStyle = '#003300';
      //context.stroke();