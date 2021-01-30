import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import db from '../db.json';
import Widget from '../src/components/Widget';
import QuizBackground from '../src/components/QuizBackground';
import QuizContainer from '../src/components/QuizContainer';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizLogo from '../src/components/QuizLogo';
import Input from '../src/components/Input';
import Button from '../src/components/Button';

export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState('');

  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>PotterQuiz</title>
      </Head>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>{db.title}</h1>
          </Widget.Header>

          <Widget.Content>
            <p>{db.description}</p>
            <form onSubmit={function (e) {
              e.preventDefault();
              router.push(`/quiz?name=${name}`);
            }}
            >
              <Input
                name="NomeUsuario"
                onChange={(e) => setName(e.target.value)}
                placeholder="Diz aí seu nome para jogar :)"
                value={name}
              />
              <Button type="submit" disabled={name.length === 0}>
                {`Jogar ${name}`}
              </Button>
            </form>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Content>
            <h1>Quizes da Galera</h1>

            {/* Teste design para o quizes da galera -> futuro componente */}
            <p>
              <a
                href={db.external[1]}
                style={{
                  textDecoration: 'none',
                  color: '#ffffff',
                  width: '100%',
                  display: 'block',
                  backgroundColor: '#806D4D',
                  padding: '10px 15px',
                  fontSize: '16px',
                  borderRadius: '4px',
                  border: '0',
                  outline: '0',
                  cursor: 'pointer',
                }}
              >
                aluraquiz-css
              </a>
            </p>
            <p>
              <a
                href={db.external[1]}
                style={{
                  textDecoration: 'none',
                  color: '#ffffff',
                  width: '100%',
                  display: 'block',
                  backgroundColor: '#806D4D',
                  padding: '10px 15px',
                  fontSize: '16px',
                  borderRadius: '4px',
                  border: '0',
                  outline: '0',
                  cursor: 'pointer',
                }}
              >
                aluraquiz-marvel
              </a>
            </p>
          </Widget.Content>
        </Widget>

        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/Brenda-Almeida" />
    </QuizBackground>
  );
}
