/**
 * HOURFORM.JSX
 */

HourForm = React.createClass({

    handleSubmit: function(e) {

        // prevent default default for event
        e.preventDefault();

        // access the input fields using React.findDOMNode and store them in a variable
        var hourInput = this.refs.hours;
        var dateInput = this.refs.date;

        var hours = hourInput.value;

        var dateValue = dateInput.value;
        var date = moment(dateValue).toDate();

        // handle submit
        Meteor.call("insertHour", hours, date, function(error, response) {

        });

        // reset values
        hourInput.value = "";
        dateInput.value = "";

    },
    render: function() {

        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title">Hours spent coding</h3>
                </div>
                <form className="panel-body" onSubmit={ this.handleSubmit }>
                    <div className="form-group">
                        <input className="form-control" type="text" ref="hours" placeholder="Number of hours" />
                        <input className="form-control top-buffer" type="date" ref="date" />
                        <button className="form-control btn btn-primary" type="submit" name="button">Add</button>
                    </div>
                </form>
            </div>
        );

    }


});
