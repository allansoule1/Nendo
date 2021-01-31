import React from 'react'
import Head from 'next/head'
import {Footer} from '../../components'
import {Header, Card} from '../../components/List';
import {withRouter} from 'next/router';
import Quality from "../../components/Misc/Quality";
class Detail extends React.Component {
    render() {

        const router = this.props.router;
        const parts = this.props.parts;

        const urlBackground = "../background.jpg";
        let part;
        if(typeof parts !== "undefined"){
            part = parts.filter(part => part.reference === router.query.nendo_ref)[0];
        }


        return (
            <>
                <Head>
                    <title>Nendo parts</title>
                </Head>

                <Header urlBackground={urlBackground}/>
                {typeof part === "undefined" ? "loading" :
                    <section>
                        <article style={{backgroundImage:`url(${part.image})`}}/>
                        <article>
                            <div>
                                <p>{part.name}</p>
                            </div>
                            <p style={{fontSize:"30px", margin: "20px 0 0 20px"}}>Information : </p>
                            <div id={"info"}>
                                <div>
                                    <p>Type: </p>
                                    <p>Qualité: </p>
                                    <p>Fabriquant: </p>
                                    <p>Personnage d'origine: </p>
                                </div>
                                <div>
                                    <p>{part.type}</p>
                                    <Quality note={part.quality}/>
                                    <p>GoodSmileCompany</p>
                                    <p>{part.base_character}</p>
                                </div>
                            </div>
                            <div id={"buy_info"}>
                                {part.remaining_stocks > 10 ?
                                    <p>On en a encore {part.remaining_stocks} en stock !</p>
                                    : part.remaining_stocks > 0 ?
                                        <p>On en a plus que {part.remaining_stocks} en stock !</p>
                                        : <p>On en a plus aucune en stock :c</p>
                                }
                                <p style={{fontSize:"30px"}}>{part.price}</p>
                            </div>
                            <div id={"buy_button"}>J'achète !</div>
                        </article>
                    </section>
                }
                <Footer/>
                <style jsx>{`

                  section{
                    width: 60%;
                    margin: 80px auto 0;
                    min-width: 600px;
                    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
                    border-radius: 20px;
                    box-sizing: border-box;
                    display: flex;
                  }
                  article:first-of-type{
                    width: 40%;
                    min-width: 250px;
                    height: 400px;
                    background-position: top;
                    background-size: contain;
                    background-repeat: no-repeat;
                    border-radius: 20px 0 0 0;
                  }
                  article{
                  
                  }
                  article > div{
                    margin-left: 20px;
                  }
                  section article > div:first-of-type p{
                    margin: 20px 0 10px;
                    text-align: center;
                    font-size: xx-large;
                    font-weight: bold;
                  }
                  #info{
                    display:flex;
                  }
                  #info p{
                    height: 20px;
                  }
                  #info ul{
                    margin-bottom: 0;
                  }
                  #info div:first-child{
                    margin-right: 10px;
                  }
                  #buy_info{
                    display: flex;
                    justify-content: space-around;
                  }
                  #buy_info p{
                    margin: 0;
                  }
                  #buy_info p:first-child{
                    line-height: 40px;
                  }
                  #buy_button{
                    background-color: orangered;
                    border-radius: 15px;
                    height: 40px;
                    padding: 0 10px;
                    line-height: 40px;
                    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
                    width: 100px;
                    text-align: center;
                    margin: 20px auto 30px;
                  }
                  #buy_button:hover{
                    cursor: pointer
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
}

export default withRouter(Detail);

export async function getStaticProps(context) {
    console.log(context);
    const res = await fetch("http://localhost:3000/nendoparts");
    console.log(res);
    const parts = await res.json();

    return {
        props: {
            parts
        }
    }
}

export async function getStaticPaths() {
    return {
        paths: [],
        fallback: true,
    }
}
