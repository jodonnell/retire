var TimerView = React.createClass({
    getInitialState: function() {
        return {date: this.props.time.toCurrentDate().dateString()};
    },
    tick: function() {
        this.setState({date: this.props.time.toCurrentDate().dateString()});
    },
    componentDidMount: function() {
        this.interval = setInterval(this.tick, 1000);
    },
    componentWillUnmount: function() {
        clearInterval(this.interval);
    },
    render: function() {
        return (
            <div>
                <div>Date: {this.state.date}</div>
            </div>
        );
    }
});
