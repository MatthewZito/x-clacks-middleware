const setXClacksOverheadHeader = require("../src/index.js");

const connect = require("connect");
const request = require("supertest");

/* Mocks */
const singleName = ["John Conway"];
const listOfNames = ["Bernd Witthuser", "Holger Czukay", "Cornelius Cardew"];
const withGNU = /^(GNU Bernd Witthuser|GNU Holger Czukay|GNU Cornelius Cardew)$/


describe("setXClacksOverheadHeader() integration tests", () => {
    describe("evaluation of default X-Clacks-OverHead headers", () => {
        const app = connect();
        app.use(setXClacksOverheadHeader());
        app.use((req, res) => {
            res.end("Hello world!")
        });
    
        const isNotEmpty = /./;

        it("should set the X-Clacks-Overhead header", () => {
            return request(app).get("/")
              .expect("X-Clacks-Overhead", isNotEmpty);
        });

        it("should default to a header value of 'GNU Terry Pratchett'", () => {
            return request(app).get("/")
              .expect("X-Clacks-Overhead", "GNU Terry Pratchett");
        });
    });

    describe("evaluation of X-Clacks-OverHead headers with options", () => {

        it("should set the X-Clacks-Overhead header to the user-specified value", () => {
            const app = connect();
            app.use(setXClacksOverheadHeader({
                names: singleName
            }));
            app.use((req, res) => {
                res.end("Hello world!")
            });

            return request(app).get("/")
              .expect("X-Clacks-Overhead", `GNU ${singleName[0]}`);
        });

        it("should set the X-Clacks-Overhead header to one of the user-specified values", () => {
            const app = connect();
            app.use(setXClacksOverheadHeader({
                names: listOfNames
            }));
            app.use((req, res) => {
                res.end("Hello world!")
            });

            return request(app).get("/")
              .expect("X-Clacks-Overhead", withGNU);
        });
    });
});