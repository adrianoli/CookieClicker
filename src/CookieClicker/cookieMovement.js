export function cookieMovement(divSize, cookieSize, numberOfFrammes) {
  const movement = {
    x: [0],
    y: [0]
  };

  const xMax = divSize.width - cookieSize + 1;
  const yMax = divSize.height - cookieSize + 1;

  for (let i = 0; i < numberOfFrammes; i++) {
    movement.x.push(Math.floor(Math.random() * xMax));
    movement.y.push(Math.floor(Math.random() * yMax));
  }

  return movement;
}
