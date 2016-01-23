/**
 * APP.JSX
 */

App = React.createClass({

    mixins: [ReactMeteorData],

    // Get data from the database and store it in the hours variable
    getMeteorData: function() {
      // Get all data from the Hours collection in JSON format
      // Use the Mongo Collection find method to get all data
        return {
            "data": Hours.find().fetch()
        };
    },

    mapData: function() {

        var dataSet = [
            { q: 0, label: 'Mon' },
            { q: 0, label: 'Tue' },
            { q: 0, label: 'Wed' },
            { q: 0, label: 'Thu' },
            { q: 0, label: 'Fri' },
            { q: 0, label: 'Sat' },
            { q: 0, label: 'Sun' }
        ];

        for (var i=0; i<dataSet.length; i++) {
            var column = dataSet[i];

            this.data.data.map(function(entry) {
                var entryWeekday = moment(entry.date).isoWeekday();
                if (entryWeekday == i+1) {
                    column.q = column.q + entry.hours;
                };
            });

        };

        return dataSet;

    },

    // Use React's render function and write some JSX (which uses regular HTML)
    // to support our 2 column structure and a div for each component we will have
    render: function() {
      // Return the JSX inside of brackets
        return (
            <div>
                <h1 className="text-center page-header">
                    H<i className="fa fa-circle-o-notch fa-spin fa-1x"></i>URS SPENT C<i className="fa fa-circle-o-notch fa-spin fa-1x"></i>DING
                </h1>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <HourForm className="" />
                            <HourList className="" data={ this.data.data } />
                        </div>
                        <div className="col-md-8">
                            <HourChart className="center-block" data={ this.mapData() } />
                        </div>
                    </div>
                </div>
            </div>
        );
    }

})
