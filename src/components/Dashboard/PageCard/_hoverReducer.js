const HOVER_ACTION = {
    MOUSE_OVER: 'mouse_over',
    MOUSE_OUT: 'mouse_out'
}

const { MOUSE_OVER, MOUSE_OUT } = HOVER_ACTION

const hoverReducer = (state, { type, payload }) => {

    switch(type) {

        case MOUSE_OVER:
            console.log('mouseover', payload)
            return {style: payload}
            

        case MOUSE_OUT:
            console.log('mouseout', payload)
            return {style: payload}
            


        default:
            return state

    }
}

export { hoverReducer, HOVER_ACTION }