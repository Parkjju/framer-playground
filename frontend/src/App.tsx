import styled from 'styled-components';
import { motion, Variants } from 'framer-motion';

const Wrapper = styled(motion.div)`
    height: 100vh;
    width: 100vw;
    display: flex;
    background-color: #b00df9;
    justify-content: center;
    align-items: center;
`;

const Box = styled(motion.div)`
    width: 200px;
    height: 200px;
    background-color: #d14cf9;
    border-radius: 40px;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
`;

const Circle = styled(motion.div)`
    width: 70px;
    height: 70px;
    background-color: white;
    border-radius: 35px;
    place-self: center;
`;

const boxVariants: Variants = {
    start: { opacity: 0, scale: 0.5 },
    end: {
        opacity: 1,
        scale: 1,
        transition: {
            type: 'spring',
            duration: 1,
            bounce: 0.5,
            staggerChildren: 0.3,
        },
    },
};

const circleVariants = {
    start: {
        opacity: 0,
        y: 20,
    },
    end: {
        y: 0,
        opacity: 1,
    },
};

function App() {
    return (
        <Wrapper>
            <Box variants={boxVariants} initial='start' animate='end'>
                <Circle variants={circleVariants} />
                <Circle variants={circleVariants} />
                <Circle variants={circleVariants} />
                <Circle variants={circleVariants} />
            </Box>
        </Wrapper>
    );
}

export default App;
