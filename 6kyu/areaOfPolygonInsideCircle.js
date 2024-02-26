function areaOfPolygonInsideCircle(circleRadius, numberOfSides) {
    if (circleRadius < 0 && numberOfSides < 0)
        return -1;
    // Area
    // degree converted to radians
    var A = ((circleRadius * circleRadius * numberOfSides) * Math.sin((360 / numberOfSides) * Math.PI / 180)) / 2;
    return Number(A.toFixed(3))
}