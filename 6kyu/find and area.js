function findArea(points) {
  let result = 0;

  for (let i = 0; i < points.length - 1; i++) {
    const x1 = points[i].X;
    const y1 = points[i].Y;
    const x2 = points[i + 1].X;
    const y2 = points[i + 1].Y;

    const base = x2 - x1;
    const height = (y1 + y2) / 2;
    const area = base * height;

    result += area;
  }

  return result;
}
