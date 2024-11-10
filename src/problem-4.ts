interface Circle {
  shape: 'circle';
  radius: number;
}
interface Rectangle {
  shape: 'rectangle';
  width: number;
  height: number;
}

// For checking is the shape circle or not
const isCircle = (shape: Circle | Rectangle): shape is Circle => {
  return shape.shape === 'circle';
};

// Calculating the area
const calculateShapeArea = (shape: Circle | Rectangle): number => {
  if (isCircle(shape)) {
    const area = Math.PI * shape.radius * shape.radius;
    return Number(area.toFixed(2));
  } else {
    const area = shape.width * shape.height;
    return Number(area.toFixed(2));
  }
};

const circleArea = calculateShapeArea({ shape: 'circle', radius: 5 });
console.log({ circleArea });

const rectangleArea = calculateShapeArea({
  shape: 'rectangle',
  width: 4,
  height: 6,
});
console.log({ rectangleArea });
