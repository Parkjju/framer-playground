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
    justify-content: space-around;
`;

const Grid = styled.div`
    display: grid;
    width: 50vw;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 300px);
    div:first-child,
    div:last-child {
        grid-column: span 2;
    }
    gap: 10px;
`;
const Box = styled(motion.div)`
    height: 300px;

    border-radius: 40px;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    margin-bottom: 200px;
`;

const Overlay = styled(motion.div)`
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const overlayVariants = {
    initial: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.3,
        },
    },
    exit: { opacity: 0 },
};

function App() {
    const [clicked, setClicked] = useState(false);
    const [boxId, setBoxId] = useState('');
    const toggleClicked = () => {
        setClicked((prev) => !prev);
    };

    return (
        <Wrapper onClick={toggleClicked}>
            <Grid>
                {['1', '2', '3', '4'].map((item) => (
                    <Box
                        onClick={() => setBoxId(item)}
                        key={item}
                        layoutId={item}
                    >
                        {item}
                    </Box>
                ))}
            </Grid>
            <AnimatePresence>
                {clicked ? (
                    <Overlay
                        variants={overlayVariants}
                        initial='initial'
                        animate='visible'
                        exit='exit'
                        layoutId='overlay'
                    >
                        <Box
                            layoutId={boxId}
                            style={{ width: '400px', height: '200px' }}
                        >
                            {boxId}
                        </Box>
                    </Overlay>
                ) : null}
            </AnimatePresence>
        </Wrapper>
    );
}

export default App;
