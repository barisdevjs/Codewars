function nbMonths(startPriceOld, startPriceNew, savingperMonth, percentLossByMonth) {
    //your code here
    if (startPriceOld >= startPriceNew) {
      return [0, Math.floor(startPriceOld - startPriceNew)];
    }
    
    let months = 0;
    let totalSaving = 0;
    let depreciatedPriceNew = startPriceNew;
    let depreciatedPriceOld = startPriceOld;
    let lossPercentage = percentLossByMonth; 
    while ((totalSaving + depreciatedPriceOld) < depreciatedPriceNew) {
      months += 1;
      if (months % 2 === 0) {
        lossPercentage += 0.5; 
      }
      totalSaving += savingperMonth;
      depreciatedPriceOld -= depreciatedPriceOld * (lossPercentage / 100);
      depreciatedPriceNew -= depreciatedPriceNew * (lossPercentage / 100);
    }
    return [months, Math.round(totalSaving + depreciatedPriceOld - depreciatedPriceNew)];
  }

    console.log(nbMonths(2000, 8000, 1000, 1.5));