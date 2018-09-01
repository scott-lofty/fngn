var expect = require('chai').expect;
var sinon = require('sinon');
var sinonTestFactory = require('sinon-test');
var sinonTest = sinonTestFactory(sinon);
var assert = require('assert');
var Player = require('../public/javascripts/schemas/playerschema.js');

describe('player', function () {
	it('it should be invalid if screen name, first name, last name and email are blank', function(done) {
			var p = new Player();
			p.validate(function(err) {
				expect(err.errors.screenName).to.exist;
				expect(err.errors.email).to.exist;
				expect(err.errors.firstName).to.exist;
				expect(err.errors.lastName).to.exist;
				done();
 		})	;
	})
	
	it('it should be valid if screen name, first name, last name and email are not blank', function(done) {
		var p = new Player( {screenName:"MechaDragon", firstName:"Mecha", lastName:"Dragon", email:"MechaDragon@SomeFakeDomain.com"});	
		p.validate(function(err) {
			expect(err).to.be.null;
			done();
		});
	});
	
	it("player model should call findOne to find a document with given screen name", sinonTest( function() {
			var spy = this.stub(Player,"findOne");
			var expectedName = "MechaDragon";
			var p = new Player({screenName: expectedName});
			p.checkForExistingScreenName(function () {});
			sinon.assert.calledWith(Player.findOne, { 
			screenName: expectedName
		});
	}));
	
	it("screen name should be unique", sinonTest( function(done) {
			var expectedName = "MechaDragon";
			var responseObject = {screenName: expectedName};
			var spy = this.stub(Player,"findOne").yields(null, responseObject);
			var p = new Player({screenName: expectedName});
			p.checkForExistingScreenName(function (doesExist) { 
				expect(doesExist).to.be.true;
				done();
			});
	}));
	
		it("player model should call findOne to find a document with given email", sinonTest( function() {
			var spy = this.stub(Player,"findOne");
			var expectedEmail = "MechaDragon@someemail.com";
			var p = new Player({email: expectedEmail});
			p.checkForExistingEmail(function () {});
			sinon.assert.calledWith(Player.findOne, { 
			email: expectedEmail
		});
	}));
	
	it("email name should be unique", sinonTest( function(done) {
			var expectedEmail = "MechaDragon@someemail.com";
			var responseObject = {email: expectedEmail};
			var spy = this.stub(Player,"findOne").yields(null, responseObject);
			var p = new Player({email: expectedEmail});
			p.checkForExistingEmail(function (doesExist) { 
				expect(doesExist).to.be.true;
				done();
			});
	}));

});
