import './index.css'

const LanguageFilterItem = props => {
  const {eachObj, changeLang, isActive} = props
  const {id, language} = eachObj

  const onClickLanguage = () => {
    changeLang(id)
  }

  const activeClassName = isActive ? 'active-language' : ''

  return (
    <li className="language-filter-item">
      <button
        type="button"
        className={`language-filter-button ${activeClassName}`}
        onClick={onClickLanguage}
      >
        {language}
      </button>
    </li>
  )
}

export default LanguageFilterItem
