import styled from "styled-components";

export const Container = styled.div`
    margin: 15px;
    margin-right: 30px;
`;

export const TopItems = styled.div`
    display: flex;
    justify-content: space-between;
    
`;

export const TopHeader = styled.h2`
    flex: 2.5;
    margin-top: 5px;
`;

export const TopIcon = styled.h2`
    flex: 1;
    display: flex;
    justify-content: space-between;

`;

export const Icon = styled.span``;

export const Form = styled.form`
    width: 95%;
    padding: 10px;
    display: flex;
    border: 1px solid gray;
    input:focus{
        outline: none;
`;
export const Input = styled.input`
    width: 90%;
    border: none;
`;
export const Button = styled.button`
    border: none;
    background: inherit;
`;

export const BottomItems = styled.div`
    margin-top: 20px 0px 0px 0px;
`;

export const Person = styled.div`
    display: flex;
    margin-bottom: 0px 0px 8px 0px;
    align-items: center;
    padding: 2px 5px;
`;

export const Img = styled.img`
    border-radius: 50%;
    width: 50px;
    height: 50px;
    flex: 1;
    margin-right: 15px;
`;

export const TextInfo = styled.div`
    flex: 3;
    
`;

export const TimeInfo = styled.div`
    flex: 1;
    float: right;
    margin-right: 0;
    
    text-align: right;
   
`;

export const Name = styled.h4`
    margin-bottom: 0px;
    margin-top: 0px;
`;

export const Text = styled.p`
    margin-top: 0;
`;

export const Time = styled.p`
    margin-bottom: 0px;
    margin-top: 0px;
    font-weight: bold;
    font-size:15px;
`;

export const Status = styled.p`
    display: flex;
    flex-direction: flex-end;
    align-items: center;
    margin-left: 40px;
    width: 20px;
    justify-content: center;
    background: dodgerblue;
    border-radius: 50%;
    color: white;
`;