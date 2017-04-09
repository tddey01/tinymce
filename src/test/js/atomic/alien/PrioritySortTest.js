test(
  'PrioritySortTest',

  [
    'ephox.agar.api.Logger',
    'ephox.agar.api.RawAssertions',
    'ephox.alloy.alien.PrioritySort',
    'ephox.katamari.api.Arr',
    'ephox.sand.api.JSON',
    'ephox.katamari.api.Struct'
  ],

  function (Logger, RawAssertions, PrioritySort, Arr, Json, Struct) {
    var checkErr = function (expected, input, order) {
      var actual = PrioritySort.sortKeys('test.sort', 'letter', input, order);
      // TODO: Use ResultAssertions test?
      actual.fold(function (err) {
        var errMessage = Arr.map(err, function (e) {
          return e.message !== undefined ? e.message : e;
        }).join('');
        RawAssertions.assertEq('Checking the error of priority sort', errMessage.indexOf(expected) > -1, true);
      }, function (val) {
        assert.fail('Priority sort should have thrown error: ' + expected + '\nWas: ' + Json.stringify(val, null, 2));
      });
    };

    var checkVal = function (expected, input, order) {
      var actual = PrioritySort.sortKeys('test.sort', 'letter', input, order);
      actual.fold(function (err) {
        assert.fail('Unexpected error: ' + err + '\nWas wanting value(' + Json.stringify(expected, null, 2) + ')');
      }, function (val) {
        RawAssertions.assertEq('Checking the value of priority sort', expected, Arr.map(val, function (v) { return v.letter(); }));
      });
    };

    var letter = Struct.immutable('letter');
    var letters = function (ls) {
      return Arr.map(ls, function (l) { return letter(l); });
    };

    Logger.sync(
      'Checking [ a, d, f ] ordering',
      function () {
        return checkErr(
          'The ordering for test.sort does not have an entry for a', 
          letters([ 'a', 'd', 'f' ]), [ 'e', 'f', 'b', 'c', 'd' ]
        );
      }
    );

    Logger.sync(
      'Checking [ a, d, f ] ordering when all specified',
      function () {
        return checkVal(
          [ 'a', 'd', 'f' ],
          letters([ 'a', 'd', 'f' ]), [ 'a', 'b', 'c', 'd', 'e', 'f' ]
        );
      }
    );
  }
);