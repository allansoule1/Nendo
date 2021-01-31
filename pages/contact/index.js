import React from 'react'
import Head from 'next/head'
import {Footer, Layout} from '../../components'
import {Header, Card} from '../../components/List';
import { Content } from "../../components/homepage";
import Link from "next/link";
<a href="mailto:test@email.com">email</a>
export default function Contact() {
    const urlBackground = "./background.jpg";
    const contentText1 = [
      "Pour toute question, remarque ou anecdote, n’hésitez pas à nous contacter !",
    <center><a href="mailto:allan.soule@eemi.com">Contacter Allan</a></center>,
    <center><a href="mailto:charlie.lucas@eemi.com">Contacter Charlie</a></center>,
    <center><a href="mailto:kenza.kezoui@eemi.com">Contacter Kenza</a></center>,
    ];

    const contentText2 = [
"Envie d’en savoir plus sur nous avant de nous contacter ? Il suffisait de demander 😉 !",

"Allan : Allan, 22 ans, est le développeur back de cette aventure. Personne cool par excellence, il pourra répondre à vos interrogations avec un poil d’humour",

"Charlie : Charlie, 22 ans, est le développeur front de ChibiMarket. Le geek du groupe, il pourra vous diriger avec plein de références croustillantes.",

"Kenza : Kenza, 23 ans, est la chargée MOA du projet. Seule fille de l’équipe, elle peut vous apprendre à réviser vos punchlines badass mode activé"
    ];


    return (
        <>
            <Head>
                <title>Contact</title>
            </Head>

            <Header urlBackground={urlBackground}/>
                <Content text={contentText1}/>
                <Content text={contentText2}/>
            <Footer/>

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

