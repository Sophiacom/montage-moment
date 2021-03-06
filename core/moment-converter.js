/**
 * @module core/moment-converter
 * @requires montage/core/converter/converter
 */
var Montage = require("montage").Montage;
var Converter = require("montage/core/converter/converter").Converter;
var Moment = require("core/moment").Moment;

/**
 * @class MomentConverter
 * @extends Converter
 */
 exports.MomentConverter = Converter.specialize(/** @lends MomentConverter# */ {
    constructor: {
        value: function MomentConverter() {
            this.super();
        }
    },

    format: { value: null },

    convert: {
        value: function(m) {
            if(m) {
                if(this.format) {
                    return m.format(this.format);
                } else {
                    return m.valueOf();
                }
            }
        }
    },

    revert: {
        value: function(s) {
            if(s) {
                var m = this.format ? Moment(s, this.format, true) : Moment(s);
                if(m.isValid()) {
                    return m;
                }
            }
        }
    }
});
