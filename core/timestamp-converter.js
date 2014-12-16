/**
 * @module core/timestamp-converter
 * @requires montage/core/converter/converter
 */
var Montage = require("montage").Montage;
var Converter = require("montage/core/converter/converter").Converter;
var Moment = require("core/moment").Moment;

/**
 * @class TimestampConverter
 * @extends Converter
 */
 exports.TimestampConverter = Converter.specialize(/** @lends TimestampConverter# */ {
    constructor: {
        value: function MomentConverter() {
            this.super();
        }
    },

    leftFormat: { value: null },
    rightFormat: { value: null },

    convert: {
        value: function(rightValue) {
            if(!rightValue) 
                return;

            var m = this.rightFormat ? Moment(rightValue, this.rightFormat, true) : Moment(rightValue);

            if(!m.isValid())
                return;

            return this.leftFormat ? m.format(this.leftFormat) : m.valueOf();            
        }
    },

    revert: {
        value: function(leftValue) {
            if(!leftValue) 
                return;

            var m = this.leftFormat ? Moment(leftValue, this.leftFormat, true) : Moment(leftValue);

            if(!m.isValid())
                return;

            return this.rightFormat ? m.format(this.rightFormat) : m.valueOf();
        }
    }
});
