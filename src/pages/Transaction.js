import React from 'react'

const Transaction = ({ match, history }) => {
    console.log(match);
    console.log(history);
    return (
        <div>
            transaction page
        </div>
    );
}

export default Transaction
