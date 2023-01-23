function getTrain(bus, train, busdistance, traindistance, target) {
    const distance = {
        bus: 10,
        train: 20
    }

    const res = []

    const walkSpeed = 3;

    const busRoute = distance.bus + bus * target + (busdistance / walkSpeed * 60);
    const trainRoute = distance.train + train * target + (traindistance / walkSpeed * 60);

    busRoute < trainRoute ? res.push(target, busRoute) : res.push(target, trainRoute);
    res
    return res;

}

console.log(getTrain(2, 1, .1, .5, 18));
console.log(getTrain(3, 2, 0.5, 0.5, 10));