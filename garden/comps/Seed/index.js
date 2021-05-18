import React, {useState} from 'react';
import styled from 'styled-components';

const Cont = styled.div`
display:flex;
justify-content:center;
align-items:center;
max-width:200px;
top:${props=>props.top}px;
position:relative;
`;

const Seed = ({
    onClick=()=>{},
    top=0,
    opacity=1,
}) =>{
    return <Cont onClick={onClick} top={top}>
        <svg opacity={opacity} id="seed" width="40" height="42" viewBox="0 0 53 42" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M50.8999 7.80001C54.3999 15.5 50.6999 26 39.7999 33C28.9999 39.9 16.3 45.2 4.99995 37.2C-6.30005 29.2 6.29994 15.9 13.2999 15.1C20.3999 14.3 25.2 7.40004 29.5 3.70004C32.9 1.00004 45.7999 -3.09999 50.8999 7.80001Z" fill="#D9A060"/>
        <path d="M39.7999 33.0001C50.5999 26.1001 54.3999 15.6001 50.8999 7.80008C50.4999 7.00008 50.1 6.3001 49.7 5.6001C50.3 9.5001 49.2999 13.6001 48.0999 17.3001C46.6999 21.5001 44.4999 25.1001 41.3999 28.1001C38.1999 31.2001 34.1999 34.1001 30.3999 36.0001C29.7999 36.3001 29.2 36.6001 28.7 36.8001C28.4 36.9001 28.1999 37.0001 27.8999 37.1001C27.8999 37.1001 27.5999 37.2001 27.3999 37.3001C27.4999 37.3001 27.4999 37.2001 27.3999 37.3001C27.1999 37.4001 27.2999 37.3001 27.3999 37.3001C27.1999 37.4001 26.8999 37.5001 26.8999 37.5001C26.5999 37.6001 26.3999 37.7001 26.0999 37.8001C25.7999 37.9001 25.5999 38.0001 25.2999 38.1001C25.2999 38.1001 25.3 38.1001 25.2 38.1001C25.3 38.1001 25.2999 38.1001 25.3999 38.1001C24.9999 38.2001 25 38.2001 25.2 38.1001C25.1 38.1001 24.8999 38.2001 24.7999 38.2001C24.3999 38.3001 23.9999 38.4001 23.4999 38.5001C23.4999 38.5001 23.4999 38.5001 23.5999 38.5001C24.2999 38.4001 22.7999 38.7001 23.4999 38.5001H23.5999C23.3999 38.5001 23.1999 38.6001 22.9999 38.6001C22.4999 38.7001 21.9999 38.8001 21.4999 38.9001C21.4999 38.9001 21.2999 38.9001 21.0999 39.0001C21.1999 39.0001 21.1999 39.0001 21.0999 39.0001C20.7999 39.0001 20.9999 39.0001 21.0999 39.0001C20.8999 39.0001 20.3999 39.1001 20.2999 39.1001C16.4999 39.6001 12.3999 39.7001 8.29993 38.9001C18.5999 44.2001 29.8999 39.3001 39.7999 33.0001Z" fill="#F3CC9F"/>
        <path d="M50.8999 7.80001C45.8999 -3.09999 32.8999 1.00004 29.6999 3.70004C25.3999 7.40004 20.4999 14.3 13.4999 15.1C6.3999 15.9 -6.10009 29.2 5.19991 37.2C8.19991 39.3 11.2999 40.5 14.4999 41C13.8999 38.5 13.4999 36 13.3999 33.4C13.3999 33.5 13.3999 33.7 13.3999 33.8C13.3999 33.4 13.3999 33 13.3999 32.6C13.3999 32.8 13.3999 33.1 13.3999 33.3C13.3999 31.3 13.7999 29.4 14.4999 27.6C14.3999 27.8 14.2999 28 14.1999 28.2C14.3999 27.8 14.5999 27.4 14.6999 27C14.5999 27.2 14.5999 27.4 14.4999 27.6C15.1999 26.2 16.0999 24.8 17.1999 23.6C17.3999 23.3 17.6999 23 17.8999 22.7C17.7999 22.8 17.7999 22.8 17.6999 22.9C17.3999 23.3 17.5999 23 17.8999 22.7C17.9999 22.6 18.0999 22.4 18.1999 22.3C18.1999 22.3 17.9999 22.5 17.8999 22.7C17.9999 22.5 18.1999 22.4 18.2999 22.2C18.5999 21.8 18.9999 21.4 19.2999 21C18.7999 21.5 20.0999 20 19.3999 20.9L19.2999 21C20.6999 19.5 21.9999 18 23.4999 16.6C24.1999 16 24.7999 15.4 25.4999 14.8C25.6999 14.6 25.9999 14.4 26.1999 14.2C26.2999 14.1 26.4999 13.9 26.6999 13.8C26.7999 13.7 26.9999 13.6 27.0999 13.5C26.9999 13.6 26.8999 13.6 26.8999 13.7C27.5999 13.2 28.2999 12.8 28.9999 12.3C29.3999 12.1 29.7999 11.8 30.1999 11.6H30.2999C30.1999 11.6 30.1999 11.7 30.0999 11.7C29.2999 12.1 31.8999 10.7 30.7999 11.3C30.5999 11.4 30.4999 11.5 30.2999 11.6C31.0999 11.2 31.7999 10.9 32.5999 10.6C33.0999 10.4 33.4999 10.2 33.9999 10C34.1999 9.90002 34.5999 9.80004 34.8999 9.70004C34.5999 9.80004 34.3999 9.90002 34.0999 9.90002C35.9999 9.30002 35.5999 9.40004 34.8999 9.70004C35.5999 9.50004 36.2999 9.30003 36.9999 9.10003C37.2999 9.00003 37.4999 9.00002 37.7999 8.90002C37.2999 9.00002 36.3999 9.20002 37.8999 8.90002C39.6999 8.60002 38.1999 8.80002 37.8999 8.90002H37.7999C37.8999 8.90002 37.9999 8.90002 37.9999 8.90002C38.3999 8.80002 38.7999 8.80004 39.2999 8.70004C39.7999 8.60004 40.1999 8.60003 40.6999 8.60003C40.5999 8.60003 40.5999 8.60003 40.4999 8.60003C38.9999 8.60003 42.5999 8.40003 40.7999 8.60003H40.6999C41.0999 8.60003 41.4999 8.60003 41.8999 8.60003C42.0999 8.60003 42.2999 8.60004 42.5999 8.70004C42.3999 8.70004 42.1999 8.60003 41.9999 8.60003C43.6999 8.90003 43.2999 8.80004 42.5999 8.70004C43.2999 8.80004 43.8999 9.00003 44.5999 9.10003C44.1999 9.00003 43.8999 9.00002 43.7999 8.90002C43.9999 9.00002 44.4999 9.10004 44.6999 9.20004C44.9999 9.30004 45.2999 9.50004 45.4999 9.70004C45.2999 9.50004 45.0999 9.30004 44.7999 9.20004C45.1999 9.50004 45.4999 9.70002 45.8999 10C45.7999 9.90002 45.5999 9.80001 45.4999 9.80001C47.3999 11.4 49.0999 13.5 50.3999 15.7C50.2999 15.6 50.2999 15.5 50.1999 15.3C50.3999 15.6 50.5999 16 50.7999 16.3C50.6999 16.1 50.4999 15.9 50.3999 15.6C50.8999 16.6 51.2999 17.6 51.5999 18.6C52.4999 14.9 52.3999 11.1 50.8999 7.80001Z" fill="#C2844A"/>
        <path d="M18.5001 15.0001C17.2001 15.0001 16.4001 14.8001 16.2001 14.6001C20.2001 13.2001 23.5 9.90009 26.3 7.00009C26.8 6.50009 27.2001 6.1001 27.7001 5.6001C28.8001 9.2001 26.9001 12.0001 25.0001 13.2001C23.1001 14.5001 20.4001 15.0001 18.5001 15.0001Z" fill="#EFDBC3"/>
        <path d="M27.7001 6.00003C28.8001 10.4 25.7 12.7 25 13.2C23.1 14.5 20.4 14.9 18.5 14.9C17.5 14.9 16.9 14.8 16.6 14.7C20.5 13.2 23.7 10 26.5 7.20004C26.9 6.70004 27.3001 6.30003 27.7001 6.00003ZM27.8 5.40002C24.5 8.60002 20.8 12.9 16 14.5C15.9 14.9 16.9 15.2 18.4 15.2C20.3 15.2 23.1 14.7 25.1 13.4C26.7 12.4 29.2 9.70002 27.8 5.40002Z" fill="#D9A060"/>
        <g opacity="0.75">
        <path opacity="0.75" d="M41.7999 22.1001C40.7999 23.2001 39.7999 24.1001 38.5999 24.9001C37.9999 25.3001 37.3999 25.7001 36.7999 26.0001C36.1999 26.3001 35.4999 26.6001 34.7999 26.6001C35.4999 26.4001 35.9999 26.0001 36.4999 25.5001C36.9999 25.0001 37.3999 24.5001 37.7999 24.0001C38.5999 23.0001 39.2999 21.9001 39.8999 20.7001C40.1999 20.1001 40.8999 19.9001 41.3999 20.2001C41.9999 20.5001 42.1999 21.2001 41.8999 21.7001C41.8999 21.9001 41.8999 22.0001 41.7999 22.1001Z" fill="#EFDBC3"/>
        </g>
        </svg>
    </Cont>
}

export default Seed;