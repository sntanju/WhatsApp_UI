import React, { Fragment } from 'react';
import { BottomItems, Container, Icon, Input, TopHeader, TopIcon, TopItems, Person, Img, Name, Text, Time, Status, TextInfo, TimeInfo, Form, Button } from './LeftPartStyle';
import { AiOutlinePlus, AiOutlineSetting } from 'react-icons/ai';
import { VscSearch } from 'react-icons/vsc';
import { leftSideData } from '../data';

const LeftPart = () => {
    return (
        <Container>

            <TopItems>
                <TopHeader>Chats</TopHeader>
                <TopIcon>
                    <Icon><AiOutlinePlus/></Icon>
                    <Icon><AiOutlineSetting/></Icon>
                </TopIcon>
            </TopItems>
            <Form>
                <Input placeholder= "Search or start new chat"/>
                <Button><VscSearch/></Button>
            </Form>
            

            <BottomItems>
                {
                    leftSideData.map((data, key) =>
                    <Fragment>
                    { data.name === "Alice Whitman" ? 
                    <Person style={{backgroundColor: "lightblue"}}>
                        <Img src={data.img}/>
                        <TextInfo>
                            <Name>{data.name}</Name>
                            {
                             data.text === "Typing..." ? 
                             <Text style={{color: "dodgerblue"}}>{data.text}</Text>
                             : 
                             <Text>{data.text}</Text>
                             }
                        </TextInfo>
                        <TimeInfo>

                             {
                             data.status !== 0 ? 
                             <Time style={{color: "dodgerblue"}}>{data.time}</Time> 
                             : 
                             <Time style={{color: "gray"}}>{data.time}</Time>
                             }
                            
                            {data.status !== 0 ? <Status>{data.status}</Status> : null}
                            
                        </TimeInfo>
                    </Person>
                    : 
                    <Person >
                        <Img src={data.img}/>
                        <TextInfo>
                            <Name>{data.name}</Name>
                            {
                             data.text === "Typing..." ? 
                             <Text style={{color: "dodgerblue"}}>{data.text}</Text>
                             : 
                             <Text>{data.text}</Text>
                             }
                        </TextInfo>
                        <TimeInfo>

                             {
                             data.status !== 0 ? 
                             <Time style={{color: "dodgerblue"}}>{data.time}</Time> 
                             : 
                             <Time style={{color: "gray"}}>{data.time}</Time>
                             }
                            
                            {data.status !== 0 ? <Status>{data.status}</Status> : null}
                            
                        </TimeInfo>
                    </Person>}
                    </Fragment> 
                    )
                }
            </BottomItems>

        </Container>
    );
};

export default LeftPart;