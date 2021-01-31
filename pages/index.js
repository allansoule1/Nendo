import React from 'react';
import Head from 'next/head';
import {Header, Content, Banner} from "../components/homepage";
import {Footer} from "../components"


export default function Home() {

    const urlBackground = "./background.jpg";
    const contentText1 = [
      "Si comme nous, votre passe-temps est de personnaliser des Nendoroid, alors NendoParts est un projet fait pour vous !",
      "Si comme nous, trouver des pièces détachées Nendoroid est devenue une chasse au trésor compliquée, onéreuse et chronophage, alors vous êtes tombés sur le bon site !",
      "NendoParts est le site francophone sur lequel vous pourrez trouver toutes les pièces détachées Nendoroid que vous recherchez.",
        "Alors, tentés ?"
    ];
    const contentText2 = [
        "Qui sommes nous ?",
        "Une équipe de 3 personnes, adorant les Nendoroid.",
        "Nous nous sommes rencontrés à l’école EEMI.",
        "Lors d’un projet de cours, nous avons décidé de créer NendoParts afin que trouver les pièces Nendoroid dont vous avez besoin ne soit plus un casse-tête linguistique, monétaire, et aléatoire."
    ];

    return (
        <div className="container">
            <Head>
                <title>Buy Nendo Parts !</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main>
                <Header  urlBackground={urlBackground}/>
                <Content text={contentText1}/>
                <Banner urlBackground={urlBackground}/>
                <Content text={contentText2} imgLeft={true}/>
                <Footer/>
            </main>
            <style jsx>{`

            main{
    height: 260vh;

}
            
            `}</style>
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
        </div>
    )
}
