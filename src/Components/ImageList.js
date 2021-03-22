import React from 'react';

const ImageList=(props)=>{
    const AllImagesList=props.images.map(({id,urls,description})=>{
        return <img key={id} src={urls.regular} alt={description} />
    } );

    return(<div>{AllImagesList}</div>);
    };

export default ImageList;
