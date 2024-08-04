import './index.css'

const RepositoryItem = props => {
  const {repoDetails} = props
  const {name, issuesCount, forksCount, starsCount, avatarUrl} = repoDetails

  return (
    <div className="repository-item">
      <img src={avatarUrl} alt={name} className="repo-avatar" />
      <h1 className="repo-name">{name}</h1>
      <div className="repo-info">
        <div className="repo-info-item">
          <img
            src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png"
            alt="stars"
            className="repo-icon"
          />
          <p>{starsCount} stars</p>
        </div>
        <div className="repo-info-item">
          <img
            src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png"
            alt="forks"
            className="repo-icon"
          />
          <p>{forksCount} forks</p>
        </div>
        <div className="repo-info-item">
          <img
            src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png"
            alt="open issues"
            className="repo-icon"
          />
          <p>{issuesCount} open issues</p>
        </div>
      </div>
    </div>
  )
}

export default RepositoryItem
