import { ExperienceBar } from "../components/ExperienceBar";
import { CompletedChallenges } from "../components/CompletedChallenges";
import { ChallengeBox } from "../components/ChallengeBox";
import { Countdown } from "../components/Countdown";
import { Profile } from "../components/Profile";

import Head from 'next/head';

import styles from '../styles/Pages/Home.module.css'
import { CountdownProvider } from "../contexts/CountdownContext";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Início | move.it</title>
      </Head>

      <ExperienceBar />

      <CountdownProvider>
        <section>
          <div>
            <Profile />
            <CompletedChallenges />
            <Countdown />
          </div>

          <div>
            <ChallengeBox />
          </div>
        </section>
      </CountdownProvider>
    </div>
  )
}
