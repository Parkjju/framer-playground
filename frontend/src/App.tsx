import styled from 'styled-components';
import {
    motion,
    useViewportScroll,
    useMotionValue,
    useTransform,
    Variants,
} from 'framer-motion';
import { useEffect } from 'react';

const Wrapper = styled(motion.div)`
    height: 100vh;
    width: 100vw;
    display: flex;
    background-color: linear-gradient(
        135deg,
        rgb(238, 0, 135),
        rgb(238, 0, 238)
    );
    justify-content: center;
    align-items: center;
    height: 150vh;
`;

const Box = styled(motion.div)`
    width: 200px;
    height: 200px;
    background-color: white;
    border-radius: 40px;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const boxVariants: Variants = {
    hover: { rotateZ: 90 },
};

function App() {
    const x = useMotionValue(0);
    const rotateZ = useTransform(x, [-800, 800], [-360, 360]);
    const gradient = useTransform(
        x,
        [-800, 0, 800],
        [
            'linear-gradient(135deg,rgb(0, 167, 238),rgb(0, 107, 238))',
            'linear-gradient(135deg,rgb(238, 0, 135),rgb(238, 0, 238))',
            'linear-gradient(135deg,rgb(0, 238, 147),rgb(0, 238, 44))',
        ]
    );

    const { scrollYProgress } = useViewportScroll();
    const scale = useTransform(scrollYProgress, [0, 1], [1, 5]);

    return (
        <Wrapper style={{ background: gradient }}>
            <Box
                style={{ x, rotateZ, scale }}
                drag='x'
                dragSnapToOrigin
                variants={boxVariants}
                whileHover='hover'
                whileTap='click'
            />
        </Wrapper>
    );
}

export default App;
