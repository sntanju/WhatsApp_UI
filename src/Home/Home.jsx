import React, { Fragment } from 'react';
import LeftPart from '../LeftPart/LeftPart';
import RightPart from '../RightPart/RightPart';
import TopBar from '../TopBar/TopBar';
import { Container } from './HomeStyle';

const Home = () => {
    return (
        <Fragment>
            <TopBar/>
            <Container>
                <LeftPart/>
                <RightPart/>
            </Container>
        </Fragment>
    );
};

export default Home;