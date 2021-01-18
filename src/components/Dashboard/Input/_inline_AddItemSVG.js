
const arrowStyleFactory = (active) => ({

    width: '0.4875em',
    height: '0.4875em',
    display: 'block',

    flexShrink: '0',
    backfaceVisibility: 'hidden',
    transition: 'transform 200ms ease-out 0s',
    transform: active ? 'rotateZ(270deg)' : 'rotateZ(180deg)',
    opacity: '1',

    marginRight: '5px',
    marginLeft: '5px'

})

export { arrowStyleFactory }