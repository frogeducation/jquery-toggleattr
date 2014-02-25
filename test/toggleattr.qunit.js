(function() {
    var $test;
    module('toggleattr.jquery.js tests', {
        setup: function() {
            $test = $('<div id="test" />');
            $('#qunit-fixture').append($test);
        }
    });

    test('Can toggle an attribute on', 2, function() {
        $test.toggleAttr('someattr', 'someValue');
        equal($('#test[someattr="someValue"]').length, 1);

        $test.toggleAttr('some-dashed-attr', 'someOtherValue');
        equal($('#test[some-dashed-attr="someOtherValue"]').length, 1);
    });

    test('Can toggle an attribute off', 2, function() {
        // Add some attributes
        $test.attr('myattr', 'myvalue');
        $test.attr('my-attr', 'myNewValue');

        // Excercise
        $test.toggleAttr('myattr', 'myvalue');
        $test.toggleAttr('my-attr', 'myNewValue');

        // Test
        equal($('#test[myattr="myvalue"]').length, 0);
        equal($('#test[my-attr="myNewValue"]').length, 0);
    });

    test('Can toggle an attribute without specifying a value', 2, function() {
        $test.toggleAttr('disabled');
        equal($('#test[disabled]').length, 1);

        $test.toggleAttr('disabled');
        equal($('#test[disabled]').length, 0);
    });

    test('Can toggle an attribute with the force parameter', 6, function() {
        $test.toggleAttr('attr1', 'value1', true);
        $test.attr('alreadyExists', 'aValue');
        $test.attr('changeMe', 'valueA');

        equal($('#test[attr1="value1"]').length, 1);

        $test.toggleAttr('attr1', 'value1', false);
        equal($('#test[attr1="value1"]').length, 0);

        // Test behaviour for scenario where attribute doesn't exist
        $test.toggleAttr('attr1', 'value1', false);
        equal($('#test[attr1="value1"]').length, 0);

        // Test behaviour where attribute already exists
        $test.toggleAttr('alreadyExists', 'aValue', true);
        equal($('#test[alreadyExists="aValue"]').length, 1);

        // Test that when force = true and value is different, value gets updated
        $test.toggleAttr('changeMe', 'valueB', true);
        equal($('#test[changeMe="valueB"]').length, 1);
        equal($('#test[changeMe="valueA"]').length, 0);
    });

    test('Function returns the original object (for chaining)', 1, function() {
        equal($test.toggleAttr('attrA', 'valueX'), $test);
    });
})();
