

function kilometerToMeter(kilometer) {
    if (typeof (kilometer) != "number" || kilometer < 0) {
        return "Input is invalid!";
    }

    var meter = kilometer * 1000;
    return meter;
}


function budgetCalculator(clocksNumber, phonesNumber, laptopsNumber) {
    if (typeof (clocksNumber) !== "number" ||
        typeof (phonesNumber) !== "number" ||
        typeof (laptopsNumber) !== "number" ||
        clocksNumber < 0 || phonesNumber < 0 || laptopsNumber < 0) {
        return "Input is invalid!";
    }

    var total = clocksNumber * 50 + phonesNumber * 100 + laptopsNumber * 500;
    return total;
}


function hotelCost(daysAmount) {
    if (typeof (daysAmount) !== "number" || daysAmount < 0) {
        return "Input is invalid!";
    }

    var totalCost;
    if (daysAmount > 20) {
        var thirstyToAllDays = daysAmount - 20;
        totalCost = 10 * 100 + 10 * 80 + thirstyToAllDays * 50;
    } else if (daysAmount > 10) {
        var twentyToTenDays = daysAmount - 10;
        totalCost = 10 * 100 + twentyToTenDays * 80;
    } else {
        totalCost = daysAmount * 100;
    }

    return totalCost;
}


function megaFriend(friends) {
    if (friends.length === 0 || typeof (friends) !== "object") {
        return "Input is invalid!";
    }

    var megaName = friends[0];
    for (var i = 1; i < friends.length; i++) {
        if (megaName.length < friends[i].length) {
            megaName = friends[i];
        }
    }
    return megaName;
}