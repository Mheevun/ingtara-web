import Transition from 'react-transition-group/Transition'

const duration = 300;
const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 0,
}
const transitionStyles = {
    entering: { opacity: 0.1 },
    entered:  { opacity: 1 },
};
export default ({ in: inProp }) => (
    <Transition in={inProp} timeout={duration}>
        {(state) => (
            <div style={{
                ...defaultStyle,
                ...transitionStyles[state]
            }}>
                I'm A fade Transition!
            </div>
        )}
    </Transition>
);