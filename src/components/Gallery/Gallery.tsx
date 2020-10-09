import React, { useEffect, useState } from 'react';
import { Card } from '../../components';
import { db } from '../../services/firebase';
import Masonry from 'react-masonry-component';

import './Gallery.scss';

const Gallery: React.FC = () => {
  const [photos, setPhotos] = useState<any>([]);
  useEffect(() => {
    db.ref('photos/').orderByChild('createdAt').on('value', function(snapshot) {
      let allPhotos = Object.keys(snapshot.val()).map(key => ({ key, createdAt: snapshot.val()[key]['createdAt'], url:snapshot.val()[key]['url'], label: snapshot.val()[key]['label'] }))
      setPhotos(allPhotos.reverse());
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
        photos.map(({ key, url, label, createdAt })  => (
          <li key={key} >
            <Card src={url} label={label} id={key} />
          </li>
        ))
      }
    </Masonry>
  )
}

export default Gallery;