const chai = require("chai");
const expect = chai.expect;
const assert = chai.assert;

describe('domModule', function () {
    describe('Module#index.html', function () {
        before(function () {
            this.timeout(0);
            const fs = require('fs');
            let htmlString = fs.readFileSync("./src/index.html").toString();
            this.jsdom = require("jsdom-global")(htmlString);
        });

        after(function () {
            this.jsdom();
        });

        it("test if header is created for 'Hi, I'm Mani 👓'", function () {
            let testMessage = "Hi, I'm Mani 👓";
            let testElement = document.getElementsByTagName("h1")[0].textContent;
            let className = document.getElementsByTagName("p")[0].classList[0];
            assert.equal(testElement, testMessage);
            assert.equal(className, undefined);
        });

        it("test if header is created and class is applied", function () {
            let className = document.getElementsByTagName("h1")[0].classList[0];
            assert.equal(className, "header");
        });
    });
});