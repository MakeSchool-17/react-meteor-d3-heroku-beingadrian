/**
 * HOURCHART.JSX
 */

HourChart = React.createClass({

    componentDidMount: function() {

        var chartElement = this.refs.chart;

        var svgCanvas = d3.select(chartElement)
                            .append("svg")
                            .attr("width", this.props.width)
                            .attr("height", this.props.height);

        this.renderChart(this.props);

    },

    componentWillUpdate: function(newProps) {

        this.renderChart(newProps);

    },

    getDefaultProps: function() {

        return {
            width: 600,
            height: 400,
        };

    },

    renderChart: function(props) {

        var data = props.data;

        var max = _.max(_.pluck(data, "q"));

        var svg = d3.select("svg");

        var bars = svg.selectAll("rect").data(data);

        var yScale = d3.scale.linear()
           .domain([0, max])
           .range([0, props.height - 35]);

        var xScale = d3.scale.ordinal()
                   .domain(d3.range(data.length))
                   .rangeRoundBands([0, props.width], 0.05);

        this.setupBars(bars, xScale, yScale);

        this.setupQLabels(svg, xScale, yScale, data);

        this.setupLabels(svg, xScale);

    },

    setupBars: function(bars, xScale, yScale) {

        // keep a reference to the current 'this'
        var self = this;

        bars.enter()
            .append("rect")
            .attr("fill", "#337ab7");

        bars.transition()
            .duration(1000)
            .attr("x", function(data, index) {
                return xScale(index);
            })
            .attr("y", function(data, index) {
                return self.props.height - yScale(data.q) - 20;
            })
            .attr("width", xScale.rangeBand())
            .attr("height", function(data, index) {
                return yScale(data.q);
            });

        bars.exit()
            .remove();

    },

    setupQLabels: function(svg, xScale, yScale, data) {

        var self = this;

        var qLabel = svg.selectAll(".qLabel").data(data);

        qLabel.enter()
            .append("text")
            .attr("class", "qLabel")
            .attr("text-anchor", "middle");

        qLabel.transition()
            .duration(1000)
            .attr("x", function(data, index) {
                return xScale(index) + xScale.rangeBand() / 2;
            })
            .attr("y", function (data, index) {
                return self.props.height - yScale(data.q) - 25;
            })
            .text(function(data, index) {
                return data.q;
            });

    },

    setupLabels: function(svg, xScale) {

        var self = this;

        var label = svg.selectAll("label").data(self.props.data);

        label.enter()
            .append("text")
            .attr("class", "label");

        label.text(function(data, index) {
                return data.label;
            })
            .attr("text-anchor", "middle")
            .attr("x", function(data, index) {
                return xScale(index) + xScale.rangeBand() / 2;
            })
            .attr("y", function(data, index) {
                return self.props.height - 5;
            });

    },

    render: function() {

        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title">Bar chart</h3>
                </div>
                <div className="panel-body">
                    <div className="text-center" ref="chart"></div>
                </div>
            </div>
        );

    }

});
