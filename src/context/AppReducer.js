export default ( state, { type, data }) => {
    switch (type) {
        case 'DELETE_TRANSACTION':
            return {
                ...state,
                transactions: state.transactions.filter( transaction => transaction.id !== data)
            }
        
        case 'ADD_TRANSACTION': 
            return {
                ...state,
                transactions: [data, ...state.transactions]
            }
        default:
            return state;
    }
}