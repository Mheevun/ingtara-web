import Transition from 'react-transition-group/Transition'
import * as React from "react"

const duration = 300;
const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out, transform ${duration}ms ease-in-out`,
    opacity: 0,
    transform: 'translateY(100vh)'
}
const transitionStyles = {
    entering: { opacity: 0.1, transform: 'translateY(5vh)'},
    entered:  { opacity: 1, transform: 'translateY(0%)'},
    exiting: {opacity: 0, transform: 'translateY(5vh)'}
};
export default ({children, in: inProp }) => (
    <Transition in={inProp} timeout={duration}>
        {
            // Children is a function that receives the current
            // status of the animation.
            (status) => {
                // Don't render anything if component has 'exited'.
                if (status === 'exited') {
                    return null
                }

                // Apply different styles to children based
                // on the current value of 'status'.
                const currentStyles = transitionStyles[status]
                return React.cloneElement(children, {
                    style: Object.assign({}, defaultStyle, currentStyles)
                })
            }
        }
    </Transition>
);