import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const Wrapper = styled(motion.div)`
    height: 100vh;
    width: 100vw;
    display: flex;
    background-color: linear-gradient(
        135deg,
        rgb(238, 0, 135),
        rgb(238, 0, 238)
    );
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;
const Box = styled(motion.div)`
    height: 200px;
    width: 200px;
    position: absolute;
    top: 100px;
    border-radius: 50px;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    margin-bottom: 200px;
`;

const boxVariants = {
    initial: (back: boolean) => {
        return back ? { x: 500, opacity: 0 } : { x: -500, opacity: 0 };
    },

    visible: {
        x: 0,
        opacity: 1,

        // transition: {
        //     duration: 1,
        // },
    },
    leaving: (back: boolean) => {
        return back ? { x: -500, opacity: 0 } : { x: 500, opacity: 0 };
    },
};

function App() {
    const [visible, setvisible] = useState(1);
    const [back, setBack] = useState(false);
    const nextIndex = () => {
        setvisible((prev) => (prev === 10 ? 1 : prev + 1));
        setBack(false);
    };
    const prevIndex = () => {
        setvisible((prev) => (prev === 1 ? 10 : prev - 1));
        setBack(true);
    };

    return (
        <Wrapper>
            <AnimatePresence custom={back}>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) =>
                    i === visible ? (
                        <Box
                            custom={back}
                            variants={boxVariants}
                            exit='leaving'
                            initial='initial'
                            animate='visible'
                            key={i}
                        >
                            {i}
                        </Box>
                    ) : null
                )}
            </AnimatePresence>
            <button onClick={nextIndex}>Next</button>
            <button onClick={prevIndex}>Prev</button>
        </Wrapper>
    );
}

export default App;
