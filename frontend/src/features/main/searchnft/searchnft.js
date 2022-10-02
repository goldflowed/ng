import NavBar from "../../../common/navbar/NavBar"
import Footer from "../../../common/footer/Footer"
import Form from 'react-bootstrap/Form';
import React from 'react';
import { useState } from "react"
import {
  MDBInputGroup,
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardHeader
} from 'mdb-react-ui-kit';
import Button from 'react-bootstrap/Button';
import { nftContract } from "../../../common/web3/web3Config"
import "./searchnft.css"

function SearchNft() {

    const [txnHash, settxnHash] = useState("");
    const [tokenId, settokenId] = useState("")

    const [brandNm, setbrandNm] = useState("");
    const [productNo, setproductNo] = useState("");
    const [serialNo, setserialNo] = useState("");
    const [mfd, setmfd] = useState("");
    const [madeIn, setmadeIn] = useState("");
    const [brandAdd, setbrandArr] = useState("");
    const [ownAdd, setownArr] = useState("");

    const onTxnHandler = (event) => {
        settxnHash(event.currentTarget.value);
    }

    const onSearch = async (e) => {
        console.log('검색버튼 클릭 후', txnHash);
        const tokenId = await nftContract.methods
            .getTokenIdFromTxnHash('0xe52066c3e4d0eed86c53f2f45254740bbde410f1f602b7437ed43f2a39ca3498').call()
            .then((res) => console.log('토큰아이디 : ', res))

        await settokenId(tokenId);
        // console.log('tokenId', tokenId)

        // const nftinfo = await nftContract.methods.ngs(tokenId).call()
        //     console.log(nftinfo)
        //     console.log('nftinfo타입', typeof(nftinfo))
        //     // console.log(JSON.stringify(nftinfo.pruduct.brandNm));

        // await setbrandNm(nftinfo.brandNm);
        // await setproductNo(nftinfo.productNo);
        // await setserialNo(nftinfo.serialNo);
        // await setmfd(nftinfo.mfd);
        // await setmadeIn(nftinfo.madeIn);
    }
    
    return(
        <div className="input-add">
            <NavBar/>
            <div className="main-height">
                <br/><br/><br/><br/>
                <div>
                    <h1 style={{marginTop:50}}>상품이 진품임을 확인해 보세요.</h1>
                </div>
                <div className="input-group">
                    <MDBInputGroup className='mb-6' style={{marginTop:40}}>
                        <input className='form-control' placeholder="해쉬 주소를 입력하세요." type='text' onChange={onTxnHandler}/>
                        <Button variant="outline-primary" onClick={onSearch}>Search</Button>
                    </MDBInputGroup>
                </div>
                <MDBCard shadow='0' border='info' background='white' className='mb-3' style={{marginTop:40}}>
                    <MDBCardHeader>NFT 정보</MDBCardHeader>
                    <MDBCardBody>
                    <MDBCardTitle>토큰아이디 : {tokenId}</MDBCardTitle>
                    <MDBCardTitle>브랜드 명 : {brandNm}</MDBCardTitle>
                    <MDBCardTitle>제품 번호 : {productNo}</MDBCardTitle>
                    <MDBCardTitle>시리얼 번호 : {serialNo}</MDBCardTitle>
                    <MDBCardTitle>제조 날짜 : {mfd}</MDBCardTitle>
                    <MDBCardTitle>제조국 : {madeIn}</MDBCardTitle>
                    <MDBCardTitle>발행자 주소 : {madeIn}</MDBCardTitle>
                    <MDBCardTitle>소유자 주소 : {madeIn}</MDBCardTitle>
                    </MDBCardBody>
                </MDBCard>
            </div>
            <Footer/>
        </div>
    )

}

export default SearchNft;