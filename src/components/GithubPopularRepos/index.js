import {Component} from 'react'
import Loader from 'react-loader-spinner'
import RepositoryItem from '../RepositoryItem'
import LanguageFilterItem from '../LanguageFilterItem'
import './index.css'

const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  inProgress: 'IN_PROGRESS',
  failure: 'FAILURE',
}

class GithubPopularRepos extends Component {
  state = {
    currentLanguage: 'ALL',
    apiStatus: apiStatusConstants.inProgress,
    repos: [],
  }

  componentDidMount() {
    this.getRepos()
  }

  getRepos = async () => {
    const {currentLanguage} = this.state
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const url = `https://apis.ccbp.in/popular-repos?language=${currentLanguage}`
    const response = await fetch(url)
    if (response.ok) {
      const fetchedData = await response.json()
      const repos = fetchedData.popular_repos.map(repo => ({
        name: repo.name,
        id: repo.id,
        issuesCount: repo.issues_count,
        forksCount: repo.forks_count,
        starsCount: repo.stars_count,
        avatarUrl: repo.avatar_url,
      }))
      this.setState({repos, apiStatus: apiStatusConstants.success})
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  changeLang = langId => {
    this.setState({currentLanguage: langId}, this.getRepos)
  }

  renderReposList = () => {
    const {repos} = this.state
    return (
      <div className="repos-list-container">
        {repos.map(eachRepo => (
          <RepositoryItem key={eachRepo.id} repoDetails={eachRepo} />
        ))}
      </div>
    )
  }

  renderLoadingView = () => (
    <div data-testid="loader">
      <Loader type="ThreeDots" color="#0284c7" height={80} width={80} />
    </div>
  )

  renderFailureView = () => (
    <div className="failure-view-container">
      <img
        className="failure-view-image"
        alt="failure-view"
        src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
      />
    </div>
  )

  renderBody = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderReposList()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  render() {
    const {currentLanguage} = this.state
    return (
      <div className="github-container">
        <h1 className="github-heading">Popular</h1>
        <div className="filter-list">
          {languageFiltersData.map(eachObj => (
            <LanguageFilterItem
              key={eachObj.id}
              eachObj={eachObj}
              changeLang={this.changeLang}
              isActive={currentLanguage === eachObj.id}
            />
          ))}
        </div>
        {this.renderBody()}
      </div>
    )
  }
}

export default GithubPopularRepos
