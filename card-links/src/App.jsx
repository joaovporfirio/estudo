import { GiCoffeeCup } from 'react-icons/gi'
import MainContent from './components/MainContent'
import './App.css'
import { useEffect, useState } from 'react';
import { useGithubAutomatedRepos, ProjectIcon, StackIcon } from 'github-automated-repos';

function App() {

  {/*useGithubAutomatedRepos hook*/ }
  const { dataReposGithub } = useGithubAutomatedRepos()
  const [repository, setRepository] = useState([])
  useEffect(() => {
    {/*Put here your github Name*/ }
    fetch('https://api.github.com/users/joaovporfirio/repos')
      .then(response => response.json())
      .then(data => setRepository(dataReposGithub(data, 'tryrepo'))); {/*<-- keyWord*/ }
  }, [])


  return (
    <div className="App">

      <MainContent />
      <GiCoffeeCup id='icon-base' />
    </div>
  )
}

export default App
