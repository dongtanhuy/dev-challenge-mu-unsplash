import React, { useEffect } from 'react';
import { Card } from '../../components';
import { db } from '../../services/firebase';
import Masonry from 'react-masonry-component';
import { RootState } from '../../redux/rootReducer';
import { useSelector, useDispatch } from 'react-redux';
import { setPhotosAction } from '../../redux/actions/photo.action';

import './Gallery.scss';

const Gallery: React.FC = () => {
  const dispatch = useDispatch();
  const photos = useSelector((state: RootState) => state.photo.photos);
  const searchText = useSelector((state:RootState) => state.photo.searchText);
  useEffect(() => {
    db.ref('photos/').orderByChild('createdAt').on('value', function(snapshot) {
      let allPhotos = Object.keys(snapshot.val()).map(key => ({ key, createdAt: snapshot.val()[key]['createdAt'], url:snapshot.val()[key]['url'], label: snapshot.val()[key]['label'] }))
      dispatch(setPhotosAction(allPhotos.reverse()));
    })
  }, [])
  return (
    <Masonry
        className={'Gallery'} // default ''
        elementType={'ul'} // default 'div'
        options={{transitionDuration: 0}} // default {}
        updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
    >
      {
        searchText ? photos.filter(item => item.label.includes(searchText)).map(({ key, url, label })  => (
          <li key={key} >
            <Card src={url} label={label} id={key} />
          </li>
        )) :
        photos.map(({ key, url, label,  })  => (
          <li key={key} >
            <Card src={url} label={label} id={key} />
          </li>
        ))
      }
    </Masonry>
  )
}

export default Gallery;