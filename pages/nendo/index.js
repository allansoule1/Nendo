import React from 'react'
import Head from 'next/head'
import {Footer} from '../../components'
import {Header, Card} from '../../components/List';
import Link from "next/link";

export default function List({parts}) {
    const urlBackground = "./background.jpg";
    return (
        <>
            <Head>
                <title>Nendo parts</title>
            </Head>

            <Header urlBackground={urlBackground}/>
            {<ul>{parts.map((part) => {
                return (<Link passHref href={`/nendo/${encodeURIComponent(part.reference)}`}>
                    <a style={{textDecoration: "none"}}><Card part={part}/></a>
                </Link>)
            })}</ul>}
            <Footer/>
            <style jsx>{`
  ul{
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }
`}
            </style>
            <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
        
        h1, h2, h3, h4, h5{
          margin:0;
        }
      `}</style>
        </>

    )
}

export async function getStaticProps(context) {
    const res = await fetch("http://localhost:3000/nendoparts");
    console.log(res);
    const parts = await res.json();

    return {
        props: {
            parts
        }
    }
}
