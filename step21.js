function orbitalPeriod(arr) {
    var GM = 398600.4418;
    var earthRadius = 6367.4447;
    return arr.map(satellite => {
      let alt=satellite.avgAlt;
      delete satellite.avgAlt;
      satellite["orbitalPeriod"] = Math.round(2 * Math.PI * Math.sqrt( Math.pow((alt+earthRadius),3) / GM));
      return satellite;
    });
  }
  
  orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]); // [{name: "sputnik", orbitalPeriod: 86400}]
  orbitalPeriod([{name: "iss", avgAlt: 413.6}, 
  {name: "hubble", avgAlt: 556.7}, 
  {name: "moon", avgAlt: 378632.553}]); // [{name : "iss", orbitalPeriod: 5557}, {name: "hubble", orbitalPeriod: 5734}, {name: "moon", orbitalPeriod: 2377399}].