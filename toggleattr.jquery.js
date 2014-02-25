/**
 *  toggleAttr - jQuery plugin for toggling an element's attributes
 *  Copyright (c) 2014 James Warwood
 *
 *  Licensed under the MIT license:
 *  http://opensource.org/licenses/MIT
 *
 *  Project home:
 *  https://bitbucket.org/frogasia/jquery-toggleattr
 *
 *  Version:  1.0.0
 *
 */
(function($) {
    /* Toggle an attribute.  If the attribute exists on the element,
     * or the `force` parameter is false, the attribute will be removed.
     * If not present, or `force` is true, the attribute is set to `value`.
     *
     * @param {String} attr     The attribute to toggle
     * @param {String} value    The value for the attribute if is to be added
     * @param {Boolean} force   (Optional) If true, force the attribute to be
     *                          added (or set to `value` if it already exists).
     *                          If false, removes the attribute.
     *
     */
    $.fn.toggleAttr = function(attr, value, force) {
        force = force != null ? !!(force) : !(this.filter('['+attr+']').length);
        value = value || '';

        if (force) {
            this.attr(attr, value);
        } else {
            this.removeAttr(attr);
        }

        return this;
    };
})(jQuery);
