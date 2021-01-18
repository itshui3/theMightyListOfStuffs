// inline-style presets
const hoverCont = { backgroundColor: 'rgba(0, 0, 0, .3)' }

const hoverPg = { backgroundColor: 'pink'}
const hoverBrd = { backgroundColor: 'pink'}

// constants
const HOVERACTION = {

    OVER_CONT: 'over_cont',
    OVER_PAGE: 'over_page',
    OVER_BOARD: 'over_board',

    OUT_CONT: 'out_cont',
    OUT_PAGE: 'out_page',
    OUT_BOARD: 'out_board'

}

// hover reducer
const useHoverStyle = (state, { type, payload }) => {

    switch(type) {
        case HOVERACTION.OVER_CONT:
            return {
                ...state,
                cont: hoverCont
            }

        case HOVERACTION.OUT_CONT:
            return {
                ...state,
                cont: {}
            }

        case HOVERACTION.OVER_PAGE:
            return {
                ...state,
                page: hoverPg
            }

        case HOVERACTION.OUT_PAGE:
            return {
                ...state,
                page: {}
            }

        case HOVERACTION.OVER_BOARD:
            return {
                ...state,
                board: hoverBrd
            }

        case HOVERACTION.OUT_BOARD:
            return {
                ...state,
                board: {}
            }

        default:
            return state
    }
}

const initialHover = {
    cont: {},
    page: {},
    board: {}
}

export { HOVERACTION, useHoverStyle, initialHover }