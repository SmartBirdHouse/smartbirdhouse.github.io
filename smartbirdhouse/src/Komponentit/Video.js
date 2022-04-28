import React from 'react';

//Komponentti upottaa käyttöliittymään videon hakemalla sen SRC:nä annetusta osoitteesta
//propsina saamansa id:n perusteella. 

const Video = ({videoId}) => {
    return (
        <div className="video-responsive">
            <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${videoId}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
            />
        </div>
    )
}

export default Video