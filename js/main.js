var path = document.querySelector("path");
var handles = document.querySelectorAll("circle");

var p1 = { x:400, y: 000 };
var p2 = { x:400, y: 150 };
var p3 = { x:400, y: 300};

// [p1, p2, p3].forEach(function(point, i) {
   
//   TweenLite.set(handles[i], { x: point.x, y: point.y });
  
//   // Draggable.create(handles[i], {
//   //   onDrag: function() {
//   //     point.x = this.x;
//   //     point.y = this.y;
//   //     updatePath();
//   //   }
//   // });
// });

updatePath();

TweenLite.defaultEase = Sine.easeInOut;

var tl = new TimelineMax({ onUpdate: updatePath, repeat: -1, yoyo: true });

tl.fromTo(p2, 1.0, { x: "-=50"  }, { x: "+=100" }, 0)
  .fromTo(p3, 1.0, { x: "-=175" }, { x: "+=350" }, 0)
  .fromTo(p2, 0.5, { y: "-=15"  }, { y: "+=15", repeat: 1, yoyo: true }, 0)
  .fromTo(p3, 0.5, { y: "-=50"  }, { y: "+=50", repeat: 1, yoyo: true }, 0)

function updatePath() {
  
  var p2x = p2.x * 2 - (p1.x + p3.x) / 2;
  var p2y = p2.y * 2 - (p1.y + p3.y) / 2;
  
  var d = "M" + [p1.x, p1.y] + "Q" + [p2x, p2y, p3.x, p3.y];
  path.setAttribute("d", d);
  
  TweenLite.set(handles[0], { x: p1.x, y: p1.y });
  TweenLite.set(handles[1], { x: p2.x, y: p2.y });
  TweenLite.set(handles[2], { x: p3.x, y: p3.y });
}