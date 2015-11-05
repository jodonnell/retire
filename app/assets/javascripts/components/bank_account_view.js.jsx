var BankAccountView = React.createClass({
    getInitialState: function() {
        return {money: this.props.bankAccount.amount};
    },
    tick: function() {
        this.setState({money: this.props.bankAccount.amount});
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
                <div>Account:
                     <span className="money">${Math.round(this.state.money * 100) / 100}</span>
                </div>
            </div>
        );
    }
});
