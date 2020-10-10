import React from 'react';
import styled from 'styled-components';

declare global {
  interface Window {
    kakao: any;
  }
}

export function SectionInfomation() {
  return (
    <InformationWrapper>
      <InfoGroup>
        <Address>충남 아산시 장존동 185-7</Address>
        <Address>모나무르</Address>
        <Tel>041-582-1004</Tel>
        <BtnCall className="btn-call" href="tel:041-582-1004">
          <svg width="40px" height="40px" viewBox="0 0 40 40">
            <title>btn_call</title>
            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
              <g id="\uCCAD\uCCA9\uC7A5_\uC8FC\uD615\uC740\uC900_1" transform="translate(-305.000000, -3320.000000)">
                <g id="location" transform="translate(0.000000, 2914.000000)">
                  <g id="btn_call" transform="translate(305.000000, 406.000000)">
                    <g>
                      <circle
                        id="Oval"
                        stroke="#000000"
                        strokeWidth="0.9"
                        opacity="0.099999994"
                        cx="20.1429811"
                        cy="20.1282851"
                        r="19.35"
                      />
                      <path
                        d="M27.1276869,23.5108676 L25.1107021,21.7678076 C24.7337153,21.4445338 24.1716422,21.4650466 23.8192224,21.8149399 L22.2699301,23.3638361 C21.9194701,23.3263646 20.7335326,22.8087266 19.0980361,21.1732301 C17.4625396,19.5377336 16.9449016,18.3517961 16.9074301,18.0013361 L18.4563264,16.4520851 C18.8064142,16.09989 18.8269352,15.5377436 18.5034586,15.1609601 L16.7559684,13.1379446 C16.4459807,12.8077335 16.0173267,12.6144583 15.5646186,12.6007786 C15.1119104,12.5870989 14.6723686,12.7541395 14.3430084,13.0650311 L13.1925211,14.2146851 C12.2579446,15.1504909 11.8289281,18.8202889 16.6399569,23.6313094 C19.7663356,26.7576881 22.4105266,27.6713344 24.1358491,27.6713344 C24.827886,27.7223676 25.5137259,27.5106323 26.0565564,27.0783656 L27.2062351,25.9286786 C27.5180581,25.6185767 27.6928514,25.1966077 27.6916548,24.7568404 C27.6908721,24.2798948 27.4855176,23.8262006 27.1276869,23.5108676 L27.1276869,23.5108676 Z"
                        id="Path"
                        fill="#000000"
                        fillRule="nonzero"
                        opacity="0.300000012"
                      />
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </svg>
        </BtnCall>
      </InfoGroup>
      <InfoGroup>
        <Title>시내버스</Title>
        <Desc>온양온천역 신한은행 승차 - 엘크루아파트 하차</Desc>
        <Desc>350번(창암1리행)</Desc>
        <Desc>351번(행목2리)</Desc>
        <Desc>352번(창암1리행)</Desc>
      </InfoGroup>
    </InformationWrapper>
  );
}

const InformationWrapper = styled.div`
  padding: 38px 30px 100px;
  text-align: left;
`;
const InfoGroup = styled.div`
  margin-bottom: 30px;
  position: relative;
`;

const Address = styled.div`
  font-size: 1.1rem;
  line-height: 1.5;
`;
const Tel = styled.div`
  font-size: 0.9rem;
  color: #666;
`;
const BtnCall = styled.a`
  position: absolute;
  right: 0;
  top: 10px;
`;

const Title = styled.div`
  font-size: 1.2rem;
  line-height: 1.5;
  font-weight: 500;
  margin-bottom: 5px;
`;

const Desc = styled.div`
  font-size: 0.85rem;
  line-height: 1.8;
`;
