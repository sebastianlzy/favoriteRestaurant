const expect = require("chai").expect;
const myFavoriteRestaurant = require("../index");
const launchRequest = require("./launchRequest");
const launchResponse = require("./launchResponse");

describe("LaunchRequest", function () {
    it("It response with a welcomes message", function (done) {
        return myFavoriteRestaurant.handler(launchRequest, {}, (err, res) => {

            console.log("============================");
            console.log(res);
            console.log(launchResponse);
            console.log("============================");
            expect(res).to.equal(1);
            done();
        })
    });
});
// describe("IntentRequest", function () {
//     describe("MyFavoriteRestaurantIsIntent", function () {
//         it("It adds my favorite restaurant", function () {
//
//         });
//     });
//     describe("WhatsMyFavoriteRestaurantIntent", function () {
//         it("It tells me my favorite restaurant", function () {
//
//         });
//     });
//     describe("AMAZON.HelpIntent", function () {
//
//     });
//     describe("AMAZON.StopIntent || AMAZON.CancelIntent", function () {
//
//     });
//     describe("All other intent", function () {
//
//     });
// });
// describe("SessionEndedRequest", function () {
//
// });