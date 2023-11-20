let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
 cursor: "<span style='color: #27005D;'>|</span>",
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #27005D;">Soy estudiante, lista para convertir ideas en soluciones creativas y funcionales.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
