const expect = require("chai").expect;
const favoriteRestaurant = require("../index");

const launchRequest = require("./launchIntent/launchRequest");
const launchResponse = require("./launchIntent/launchResponse");
const myFavoriteRestaurantRequest = require("./myFavoriteRestaurantIntent/myFavoriteRestaurantIsRequest");
const myFavoriteRestaurantResponse = require("./myFavoriteRestaurantIntent/myFavoriteRestaurantResponse");
const whatsMyFavoriteRestaurantRequest = require("./whatsMyFavoriteRestaurantIntent/whatsMyFavoriteRestaurantRequest");
const whatsMyFavoriteRestaurantResponse = require("./whatsMyFavoriteRestaurantIntent/whatsMyFavoriteRestaurantResponse");
const helpRequest = require("./helpIntent/helpRequest");
const helpResponse = require("./helpIntent/helpResponse");
const stopRequest = require("./stopIntent/stopRequest");
const stopResponse = require("./stopIntent/stopResponse");
const cancelRequest = require("./cancelIntent/cancelRequest");
const cancelResponse = require("./cancelIntent/cancelResponse");
const fallbackRequest = require("./fallbackIntent/fallbackRequest");

describe("LaunchIntent", function () {
    it("It response with a welcomes message", function (done) {
        favoriteRestaurant.handler(launchRequest, {}, (err, res) => {
            expect(res).to.eql(launchResponse);
            done()
        })
    });
});
describe("MyFavoriteRestaurantIsIntent", function () {
    it("It adds my favorite restaurant", function (done) {
        favoriteRestaurant.handler(myFavoriteRestaurantRequest, {}, (err, res) => {
            expect(res).to.eql(myFavoriteRestaurantResponse);
            done()
        })
    });
});

describe("WhatsMyFavoriteRestaurantIntent", function () {
    it("It tells me my favorite restaurant", function (done) {
        favoriteRestaurant.handler(whatsMyFavoriteRestaurantRequest, {}, (err, res) => {
            expect(res).to.eql(whatsMyFavoriteRestaurantResponse);
            done()
        })
    });
});
describe("AMAZON.HelpIntent", function () {
    it("It provides help to the customer", function (done) {
        favoriteRestaurant.handler(helpRequest, {}, (err, res) => {
            expect(res).to.eql(helpResponse);
            done()
        })
    });

});
describe("AMAZON.StopIntent || AMAZON.CancelIntent", function () {
    it("It stops the skill", function (done) {
        favoriteRestaurant.handler(stopRequest, {}, (err, res) => {
            expect(res).to.eql(stopResponse);
            done()
        })
    });
    it("It cancel the skill", function (done) {
        favoriteRestaurant.handler(cancelRequest, {}, (err, res) => {
            expect(res).to.eql(cancelResponse);
            done()
        })
    });
});

describe("All other intent", function () {
    it("It provides a fallback", function (done) {
        favoriteRestaurant.handler(fallbackRequest, {}, (err, res) => {
            expect(res).to.be.undefined;
            expect(err.message).to.eql("Invalid intent");
            done()
        })
    });
});