import Head from 'next/head'
import List from '../components/list'
import Title from '../components/title'
import Step from '../components/step'
import Stepname from '../components/stepName'
import Button from '../components/button'
import style from '../styles/homebrew.module.css'

export default function Homebrew() {
  return (
    <div className={style.container}>
      <Head>
        <title>Homebrew</title>
      </Head>
      <div>
        <ul className={style.navigation}>
          <List listText="Home" />
          <List listText="OS X" />
          <List listText="Essential" />
          <List listText="Homebrew" />
          <List listText="2 - Press Enter" />
        </ul>
      </div>
      <div className={style.stepContent}>
        <Title titleText="Homebrew" />
        <Step stepText="2 - Press Enter" />
        <img src="/image/terminal.png" alt="Terminal Output" />
        <Stepname text="The instruction:" />
        <p className={style.instruction}>"Press RETURN to continue or any other key to abort"</p>
        <Stepname text="Asks you to press:" />
        <p className={style.action}>Enter</p>
        <Button />
      </div>
    </div>
  )
}