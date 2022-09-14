import React, { useState } from "react";
import SideBar from "../../../common/companysidebar/SideBar";
import styled from "styled-components";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ssafy from '../../../assets/img/ssafy.png';

const ContainerDiv = styled.div`
  display: flex;
  flex-direction: row;
  `

const SideBarDiv = styled.div`
  background-color: #3E3E3E;
  width: 300px;
  height: 969px;
  margin: 0px;
  display:flex;
  justify-content: center;
  flex-direction: column;
  `

const MainDiv = styled.div`
  /* background-color: red; */
  width: 1600px;
  padding-top:50px;
  padding-left: 100px;
  padding-right: 100px;
  font-size:20px;
  `

const Hr = styled.hr`
  height: 1px;
  background-color: black;
  width:100%;
  `

const TitleP = styled.p`
  font-size: 50px;
  font-weight: bold;
  margin: 0;
  margin-left: 20px;
  `

const InfoDiv = styled.div`
  margin:50px;
  `

const Logo = styled.img`
  width:500px;
  border-radius: 10px;
  justify-content: center;
  `

function Register() {
  const [productNumber, setPN] = useState("");
  const [serialNumber, setSN] = useState("");
  const [makingDate, setMD] = useState("");
  const [country, setC] = useState("");
  const brand = "ssafy"
  const onPNHandler = (event) => {
    setPN(event.currentTarget.value);
  }

  const onSNHandler = (event) => {
    setSN(event.currentTarget.value);
  }

  const onMDHandler = (event) => {
    setMD(event.currentTarget.value);
  }

  const onCHandler = (event) => {
    setC(event.currentTarget.value);
  }

  const regist = (event) => {
    event.preventDefault();

    console.log(brand)
    console.log(productNumber)
    console.log(serialNumber)
    console.log(makingDate)
    console.log(country)
  }

  return (
    <ContainerDiv>
      <SideBarDiv>
        <SideBar/>
      </SideBarDiv>
      <MainDiv>
        <TitleP>NFT 인증서 발급</TitleP><Hr/>
        <InfoDiv>
          <Form >
            <Logo style={{display:"block", margin:"auto"}} src={ssafy}/>

            <Form.Group style={{display:"flex", justifyContent:"center", marginTop: "35px", marginBottom: "35px"}} >
              <Form.Label style={{marginRight:"10px"}}>제품 번호: </Form.Label>
              <Form.Control style={{width:"500px"}} type="text" value={productNumber} onChange={onPNHandler}/>
            </Form.Group>

            <Form.Group style={{display:"flex", justifyContent:"center", marginTop: "35px", marginBottom: "35px"}} >
              <Form.Label style={{marginRight:"10px"}}>일련 번호: </Form.Label>
              <Form.Control style={{width:"500px"}} type="text" value={serialNumber} onChange={onSNHandler}/>
            </Form.Group>

            <Form.Group style={{display:"flex", justifyContent:"center", marginTop: "35px", marginBottom: "35px"}} >
              <Form.Label style={{marginRight:"10px"}}>제조 일자: </Form.Label>
              <Form.Control style={{width:"500px"}} type="text" value={makingDate} onChange={onMDHandler}/>
            </Form.Group>

            <Form.Group style={{display:"flex", justifyContent:"center", marginTop: "35px", marginBottom: "35px"}} >
              <Form.Label style={{marginRight:"35px"}}>제조국: </Form.Label>
              <Form.Control style={{width:"500px"}} type="text" value={country} onChange={onCHandler}/>
            </Form.Group>

            <Button style={{display:"block", margin:"auto"}} variant="primary" type="submit" onClick={regist}>
              발급
            </Button>
          </Form>
        </InfoDiv>
      </MainDiv>
    </ContainerDiv>
  )
}
export default Register;