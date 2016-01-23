/**
 * HOURLIST.JSX
 */

HourList = React.createClass({

    renderHours: function() {

        return this.props.data.map(function(data, index) {
            return <HourListItem data={ data } key={ index } />
        });

    },

    render: function() {

        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title">History</h3>
                </div>
                <ul className="margin-top-small">
                    { this.renderHours() }
                </ul>
            </div>
        );

    }

});
