describe('Testing if this works with overwolf', function () {
	it('overwolf should be defined', function () {
		return expect(overwolf).to.exist;
	});
	it('overwolf.games should exist', function () {
		return expect(overwolf.games).to.exist;
	});
	it('can use sinon stubs to wrap overwolfs methods', function () {
		var addListenerStub = sinon.stub(overwolf.games.events.onInfoUpdates, 'addListener');
		expect(addListenerStub).to.not.have.been.called;
		overwolf.games.events.onInfoUpdates.addListener(function(){});
		expect(addListenerStub).to.have.been.calledOnce;
	});
});