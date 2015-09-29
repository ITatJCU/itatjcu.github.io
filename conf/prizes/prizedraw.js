/**
 * Created by sci-lmw1 on 26/06/2015.
 */

function prizes() {

    var ids = ["prize-microsoft", "prize-sitepoint1", "prize-pluralsight", "prize-sitepoint2"];
    var tsvChoices = choose(2, ticketstsv.length);
    var cnsChoices = choose(2, ticketscns.length);

    var chosenPeople = [];

    for (var i = 0; i < tsvChoices.length; i++) {
        chosenPeople.push(ticketstsv[tsvChoices[i]][1] + " " + ticketstsv[tsvChoices[i]][2]);
    }
    for (var i = 0; i < cnsChoices.length; i++) {
        chosenPeople.push(ticketscns[cnsChoices[i]][1] + " " + ticketscns[cnsChoices[i]][2]);
    }

    outputWinners(chosenPeople, ids);
}

function singlePrize(city, id) {
    var tickets = city == 'tsv' ? ticketstsv : ticketscns;
    var choice = choose(1, tickets.length);
    var chosenPeople = [];

    chosenPeople.push(tickets[choice[0]][1] + " " + tickets[choice[0]][2]);

    outputDots(chosenPeople, [id], '.');
    // outputWinners(chosenPeople, [id]);
}

function choose(numberToChoose, maximum) {
    var choices = [];
    var choice = Math.floor((Math.random() * maximum) + 1);
    choices.push(choice);
    for (var i = 1; i < numberToChoose; i++) {
        choice = Math.floor((Math.random() * maximum) + 1);
        while (choices.indexOf(choice) > -1) {
            choice = Math.floor((Math.random() * maximum) + 1);
        }
        choices.push(choice);
    }
    return choices
}

function outputWinners(chosenPeople, ids) {
    var prizeElement;
    for (var i = 0; i < chosenPeople.length; i++) {
        prizeElement = document.getElementById(ids[i]);
        prizeElement.innerHTML = chosenPeople[i];
    }
}

function outputDots(chosenPeople, id, dots) {
    var prizeElement = document.getElementById(id[0]);
    prizeElement.innerHTML = dots;

    dots += '.';
    if (dots != '....') {
        window.setTimeout(outputDots, 500, chosenPeople, id, dots);
    } else {
        window.setTimeout(outputWinners, 500, chosenPeople, id);
    }
}

