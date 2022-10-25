import React from 'react';
import { Container, Title, TopIcons, Icon } from './TopBarStyle';
import { AiOutlineMinus } from 'react-icons/ai';
import { BiCheckbox } from 'react-icons/bi';
import { ImCross } from 'react-icons/im';
const TopBar = () => {
    return (
        <Container>
            <Title>WhatsApp Beta</Title>
            <TopIcons>
                <Icon><AiOutlineMinus/></Icon>
                <Icon><BiCheckbox/></Icon>
                <Icon><ImCross/></Icon>    
                </TopIcons>
        </Container>
    );
};

export default TopBar;