/**Coding Challenge #3*/
/**There are two gymnastics teams, Dolphins and Koalas. They compete against each
other 3 times. The winner with the highest average score wins a trophy!
Your tasks:
1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition,
and print it to the console. Don't forget that there can be a draw, so test for that
as well (draw means they have the same average score)
3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
team only wins if it has a higher score than the other team, and the same time a
score of at least 100 points. Hint: Use a logical operator to test for minimum
score, as well as multiple else-if blocks �
4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
both teams have the same score and both have a score greater or equal 100
points. Otherwise, no team wins the trophy
Test data:
Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106 */

console.log("Coding Challenge #3");
let teamDolphinsAvg = (96 + 108 + 89) / 3;
let teamKoalasAvg = (88 + 91 + 110) / 3;

var compareAvgScore = function (teamDolphinsAvg, teamKoalasAvg) {
    if (teamDolphinsAvg > teamKoalasAvg) {
        console.log("Dolphins win with an average score of " + teamDolphinsAvg);
    } else if (teamDolphinsAvg == teamKoalasAvg) {
        console.log("Two team draw!!!");
    } else {
        console.log("Koalas win with an average score of " + teamKoalasAvg);
    }
}

compareAvgScore(teamDolphinsAvg, teamKoalasAvg);
//3 
console.log("Bonus 1:");
let teamDolphinsAvg1 = (97 + 112 + 101) / 3;
let teamKoalasAvg1 = (109 + 95 + 123) / 3;

var compareAvgScore1 = function (teamDolphinsAvg1, teamKoalasAvg1) {
    if (teamDolphinsAvg1 > teamKoalasAvg1 && teamDolphinsAvg1 >= 100) {
        console.log("Dolphins win with an average score of " + teamDolphinsAvg1);
    } else if (teamDolphinsAvg1 == teamKoalasAvg1) {
        console.log("Two team draw!!!");
    } else if (teamKoalasAvg1 > teamDolphinsAvg1 && teamKoalasAvg1 >= 100) {
        console.log("Koalas win with an average score of " + teamKoalasAvg1);
    } else {
        console.log("No team win the trophy");
    }
}

compareAvgScore1(teamDolphinsAvg1, teamKoalasAvg1);
//4
console.log("Bonus 2:");

let teamDolphinsAvg2 = (97 + 112 + 101) / 3;
let teamKoalasAvg2 = (109 + 95 + 106) / 3;

var compareAvgScore2 = function (teamDolphinsAvg2, teamKoalasAvg2) {
    if (teamDolphinsAvg2 > teamKoalasAvg2 && teamDolphinsAvg2 >= 100) {
        console.log("Dolphins win with an average score of " + teamDolphinsAvg2);
    }
    else if (teamDolphinsAvg2 == teamKoalasAvg2 && teamDolphinsAvg2 >= 100 && teamKoalasAvg2 >= 100) {
        console.log("Two team draw!!!");
    }
    else if (teamKoalasAvg2 > teamDolphinsAvg2 && teamKoalasAvg2 >= 100) {
        console.log("Koalas win with an average score of " + teamKoalasAvg2);
    }
    else {
        console.log("No team win the trophy");
    }
}

compareAvgScore2(teamDolphinsAvg2, teamKoalasAvg2);