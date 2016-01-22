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

    // Use React's render function and write some JSX (which uses regular HTML)
    // to support our 2 column structure and a div for each component we will have
    render: function() {
      // Return the JSX inside of brackets
        return (
            <div>
                <h1 className="text-center page-header">Hours Spent Coding</h1>
                <div className="container">
                    <HourForm className="col-md-4" />
                </div>
            </div>
        );
    }

})
