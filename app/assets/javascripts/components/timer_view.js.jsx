var TimerView = React.createClass({
    getInitialState: function() {
        return {date: this.props.time.toCurrentDate().toDateString()};
    },
    tick: function() {
        this.setState({date: this.props.time.toCurrentDate().toDateString()});
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
