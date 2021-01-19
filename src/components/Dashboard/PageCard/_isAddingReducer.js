const initAddingState = {

    pg: false,
    brd: false

}

const IS_ADDING_ACTION = {

    ADDING_PG: 'adding_pg',
    NOT_ADDING_PG: 'not_adding_pg',

    ADDING_BRD: 'adding_brd',
    NOT_ADDING_BRD: 'not_adding_brd'

}

const isAddingReducer = (state, { type, payload }) => {

    const { 
        ADDING_PG,
        NOT_ADDING_PG,

        ADDING_BRD,
        NOT_ADDING_BRD
    } = IS_ADDING_ACTION

    switch(type) {

        case ADDING_PG:
            return {
                ...state,
                pg: true
            } 

        case NOT_ADDING_PG:
            return {
                ...state,
                pg: false
            } 

        case ADDING_BRD:
            return {
                ...state,
                brd: true
            } 

        case NOT_ADDING_BRD:
            return {
                ...state,
                brd: false
            } 

        default:
            return state

    }

}

export { initAddingState, IS_ADDING_ACTION, isAddingReducer }