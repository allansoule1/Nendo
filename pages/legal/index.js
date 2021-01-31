import React from 'react'
import Head from 'next/head'
import { Content } from "../../components/homepage";
import {Footer, Layout} from '../../components'
import {Header, Card} from '../../components/List';
import Link from "next/link";

export default function LegalNotices() {
    const urlBackground = "./background.jpg";
    const contentText1 = [
      "Copyright (c) janvier 2021 ChibiMarket Licence Libre MIT", "L’autorisation est accordée, gracieusement, à toute personne acquérant une copie de ce logiciel et des fichiers de documentation associés (le ‘logiciel’), de commercialiser le logiciel sans restriction, notamment les droits d’utiliser, de copier, de modifier, de fusionner, de publier, de distribuer, de sous-licencier et/ou de vendre des copies du logiciel, ainsi que d’autoriser les personnes auxquelles le logiciel est fournie à le faire, sous réserve des conditions suivantes :",
 "La déclaration de copyright ci-dessus et la présente autorisation doivent être incluses dans toutes copies ou parties substantielles du logiciel.",
  "Le logiciel est fourni ‘tel quel’, sans garantie d’aucune sorte, explicite ou implicite, notamment sans garantie de qualité marchande, d’adéquation à un usage particulier et d’absence de contrefaçon. En aucun cas, les auteurs ou titulaires du droit d’auteur ne seront responsables de tout dommage, réclamation ou autre responsabilité, que ce soit dans le cadre d’un contrat, d’un délit ou autre, en provenance de, consécutif à ou en relation avec le logiciel ou son utilisation, ou avec d’autres éléments du logiciel."
    ];


    return (
        <>
            <Head>
                <title>Mentions légales</title>
            </Head>

            <Header urlBackground={urlBackground}/>
            <Content text={contentText1}/>
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
