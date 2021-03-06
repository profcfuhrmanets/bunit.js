define(['bunit', 'assert'], function(bunit, assert) {
    var toreDown = false;

    bunit('Bunit', {
        setUp: function() {
            return {
                'a': 'foobar',
                'b': 21
            };
        },
        utility: function() {
            assert(this._utility()).equals(5);
        },
        setUpParameters: function(o) {
            assert(o.a).equals('foobar');
            assert(o.b).equals(21);
        },
        async: function(o, done) {
            done();
        },
        asyncTest: function(o, done) {
            done();
        },
        notAsync: function(o, done) {
            assert(done).not().isDefined();
        },
        tearDownCalled: function() {
            assert(toreDown).equals(true);
        },
        tearDown: function() {
            toreDown = true;
        },
        _utility: function() {
            return 5;
        }
    });
});
