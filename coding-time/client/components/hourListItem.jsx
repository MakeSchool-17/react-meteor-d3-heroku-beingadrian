/*
 *  HOURLISTITEM.JS
 */

 HourListItem = React.createClass({

     handleClick: function() {

         var id = this.props.data._id;

         Meteor.call("removeHour", id, function(error, response) {
             if (error) {
                 alert(error)
             }
         });

     },

     render: function() {

         // convert date format
         var date = moment(this.props.data.date).format("MM-DD-YYYY")
         var hours = this.props.data.hours;

         var sentenceEnding = ""
         if (hours == 1) {
             sentenceEnding = "hour"
         } else {
             sentenceEnding = "hours"
         }

        return (
            <li onClick={ this.handleClick }>On <strong>{ date }</strong> you coded <strong>{ hours }</strong> { sentenceEnding }</li>
        );

     }

 });
