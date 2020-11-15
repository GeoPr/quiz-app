import React from 'react'
import './App.scss'
import { Switch, Route } from 'react-router-dom'
import { Question } from './Question/Question'
import { Start } from './Start/Start'
import { Congratulations } from './Congratulations/Congratulations'

const App: React.FC = () => {
  return (
    <div className="wrapper">
      <main className="page">
        <section className="quiz">
          <div className="quiz__container _container">
            <div className="quiz__body">
              <Switch>
                <Route exact path="/" component={Start} />
                <Route path="/question0" render={() => <Question id={0} />} />
                <Route path="/question1" render={() => <Question id={1} />} />
                <Route path="/question2" render={() => <Question id={2} />} />
                <Route path="/congratulations" component={Congratulations} />
              </Switch>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
