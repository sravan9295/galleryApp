// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {details, onThumbnailClick, selected} = props
  const {thumbnailUrl, thumbnailAltText, id} = details

  const onClickImage = () => {
    onThumbnailClick(id)
  }

  const selectedClassName = selected ? 'selected' : ''

  return (
    <li>
      <button type="button" onClick={onClickImage}>
        <img
          className={`thumbnail ${selectedClassName}`}
          src={thumbnailUrl}
          alt={thumbnailAltText}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
