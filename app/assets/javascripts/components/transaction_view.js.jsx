var TransactionView = React.createClass({
    getInitialState: function() {
        return {transactions: []};
    },

    onDebit: function(bankAccount, debit) {
        let rounded = Math.round(debit.amount * 100) / 100;
        let abs = Math.abs(rounded);

        let size = this.size(abs);
        let $temp = $(`<div class="transaction" style="visiblity: hidden;">${debit.description} $${abs}</div>`).appendTo('#transactions')
        $temp.css('font-size', size);
        let left = this.getRandomIntInclusive(0, $(window).width() - $temp.width());
        let top = this.getRandomIntInclusive(0, $(window).height() - $temp.height());
        $temp.remove();

        var transaction = {description: debit.description, abs: abs, withdrawl: this.withdrawl(rounded), style: {left: left, top: top, fontSize: size}};
        this.state.transactions.push(transaction)
        this.setState({transactions: this.state.transactions})
    },

    size: function (abs) {
        let oldMax = 200;
        let oldMin = 0;
        let newMax = 50;
        let newMin = 10;

        let oldRange = oldMax - oldMin;
        let newRange = newMax - newMin;
        return (((abs - oldMin) * newRange) / oldRange) + newMin;
    },

    withdrawl: function (rounded) {
        let withdrawl = '';
        if (rounded < 0) {
            withdrawl = 'withdrawl';
        }
        return withdrawl;
    },

    remove: function (event) {
        $(event.currentTarget).remove();
    },

    componentDidMount: function() {
        $(document).on('debit', (event, bankAccount, debit) => { this.onDebit(bankAccount, debit) })
        $("#transactions").on("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", '.transaction', e => { this.remove(e)});
    },

    componentWillUnmount: function() {
        $(document).off('debit');
    },

    getRandomIntInclusive: function(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },

    render: function() {
        if (this.state.transactions.length === 0) {
            return null;
        }

        let transaction = this.state.transactions.map(function(transaction) {
            let classes = "transaction " + transaction.withdrawl;
            return <div className={classes} style={transaction.style}>{transaction.description} ${transaction.abs}</div>
        })

        return (
                <div>{transaction}</div>
        );
    }
});
