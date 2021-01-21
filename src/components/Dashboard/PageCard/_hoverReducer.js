const HOVER_ACTION = {
    MOUSE_OVER: 'mouse_over',
    MOUSE_OUT: 'mouse_out'
}

const hoverReducer = (state, { type, payload }) => {

    switch(type) {

        case MOUSE_OVER:
            return {
                ...payload
            }

        case MOUSE_OUT:
            return {
                ...payload
            }


        default:
            return state

    }
}

export { hoverReducer, HOVER_ACTION }