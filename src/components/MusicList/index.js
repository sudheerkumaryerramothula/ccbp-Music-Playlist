import {AiOutlineDelete} from 'react-icons/ai'

import './index.css'

const MusicList = props => {
  const {musicListDetails, onDelete} = props
  const {imageUrl, name, genre, duration, id} = musicListDetails

  const onClickDelete = () => {
    onDelete(id)
  }

  return (
    <li className="list-item">
      <div className="right-container">
        <img src={imageUrl} alt="track" className="song-image" />
        <div className="musicDetails-container">
          <p className="name">{name}</p>
          <p className="genre">{genre}</p>
        </div>
      </div>
      <div className="duration-delete-container">
        <p className="duration">{duration}</p>
        <button
          type="button"
          className="deleteButton"
          data-testid="delete"
          onClick={onClickDelete}
        >
          <AiOutlineDelete className="deleteIcon" />
        </button>
      </div>
    </li>
  )
}

export default MusicList
