import Head from 'next/head'

export default function Homebrew() {
  return (
    <div>
      <Head>
        <title>Homebrew</title>
      </Head>
      <div>
        <ul>
          <li>Home</li>
          <li>OS X</li>
          <li>Essential</li>
          <li>Homebrew</li>
          <li>2 - Press Enter</li>
        </ul>
      </div>
      <h1>Homebrew</h1>
      <hr />
      <h2>2 - Press Enter</h2>
      <h3>The instruction:</h3>
      <p>"Press RETURN to continue or any other key to abort"</p>
      <h3>Asks you to press:</h3>
      <p>Enter</p>
      <h3>Next step >></h3>
      <hr />
    </div>
  )
}