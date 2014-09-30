
This package is a really thin wrapper over [Moment.js](http://momentjs.com/).

It sets the locale using defaultLocalisation and returns a bare moment.js.

The object you get with
`var Moment = require("montage-moment").Moment`
is a bare moment.js object with it's locale set using MontageJS defaultLocalizer.

A converter is also included in core that you can use in your serialization using:
`"prototype": "montage-moment/core/moment-converter"`

with no further property, this converter convert from unix time to a moment.js object,
the optional "format" property allows you to convert from formated string to a moment.js object.