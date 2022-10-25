import React from 'react';
import { BsCameraVideo, BsTelephone } from 'react-icons/bs';
import { VscSearch } from 'react-icons/vsc';
import { MdAttachFile } from 'react-icons/md';
import { MdTagFaces } from 'react-icons/md';
import { AiFillFileZip, AiOutlineSend } from 'react-icons/ai';
import { Container, TopContainer, TopInfo, TopIcons, Icon, TopName, TopStatus, Img, FirstMessageDiv, FirstText, FirstTime, SecondMessageDiv, SecondText, SecondTime, SecondMessageDivContainer, ZipIcon, Button, ThirdMessageDiv, ThirdTime, Day, ForthMessageDiv, Image, ForthTime, ForthText, LastDiv,Input, SentButton, Form  } from './RightPartStyle';

const RightPart = () => {
    return (
        <Container>

            <TopContainer>    
                <TopInfo>
                    <TopName> Alice Whitman </TopName>
                    <TopStatus> Online </TopStatus>
                </TopInfo>     
                <TopIcons>
                    <Icon><BsCameraVideo/></Icon>
                    <Icon><BsTelephone/></Icon>
                    <Icon><VscSearch/></Icon>
                    <Img src='https://img.freepik.com/free-photo/confident-asian-woman-face-portrait-smiling_53876-144815.jpg'/>
                </TopIcons>           
            </TopContainer>

            <FirstMessageDiv>
                <FirstText>OK!👍</FirstText>
                <FirstTime>4:01 PM</FirstTime>
            </FirstMessageDiv>
            <SecondMessageDivContainer>
                <SecondMessageDiv>
                    <SecondText>Here are all the backgrounds. Let me know your favourite!</SecondText>
                    <SecondTime>5:12 PM✔️</SecondTime>
                </SecondMessageDiv>
            </SecondMessageDivContainer>
                
            <SecondMessageDivContainer>
                <ThirdMessageDiv>
                    <ZipIcon> <AiFillFileZip/></ZipIcon>
                    <SecondText><b>Backgrounds Zip</b> <br /> 23.5 MB Compressed (zipped) folder <br /> <br /> <Button>Open</Button><Button>Save As</Button></SecondText>
                    <ThirdTime>5:12 PM✔️</ThirdTime>
                </ThirdMessageDiv>
            </SecondMessageDivContainer>

            <Day>Today</Day>

                <ForthMessageDiv>
                    <Image src='https://awsimages.detik.net.id/community/media/visual/2021/06/17/wallpaper-windows-11.jpeg?w=750&q=90'/>
                    <ForthText>This is beautiful!</ForthText>
                    <ForthTime>8:17 PM</ForthTime>
                </ForthMessageDiv>
                <SecondMessageDivContainer>
                <SecondMessageDiv>
                    <SecondText>🤩Yes, that's my fave too!</SecondText>
                    <SecondTime>8:23 PM✔️</SecondTime>
                </SecondMessageDiv>
            </SecondMessageDivContainer>

            <LastDiv>
                <Icon><MdTagFaces/></Icon>
                <Icon><MdAttachFile/></Icon>
                <Form>
                <Input placeholder= "Type a message"/>
                <SentButton><AiOutlineSend/></SentButton>
                </Form>
            </LastDiv>
                
        </Container>
    );
};

export default RightPart;