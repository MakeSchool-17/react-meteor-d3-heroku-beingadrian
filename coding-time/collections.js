/**
 * COLLECTIONS.JS
 */

Hours = new Meteor.Collection("Hours");

Meteor.methods({

    insertHour: function(hours, date) {

        var parsedInt = parseInt(hours);

        // checking
        check(parsedInt, Number);
        check(date, Date);

        // jsonify hours and date
        var keyValuePair = { "hours": parsedInt, "date": date };

        return Hours.insert(keyValuePair);

    },
    removeHour: function(id) {

        // checking
        check(id, String);

        return Hours.remove(id);

    }

});
