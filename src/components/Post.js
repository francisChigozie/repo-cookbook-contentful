import React from 'react'
import marked from 'marked'
import { Link } from 'react-router-dom'

export default function Post({article}) {
    console.log(article)

    const navStyle = {
        color: 'green',textDecoration: 'none'
    }

    const {name, feuturedImage, description} = article.fields
    console.log(article.sys.id)
    const postDescription = marked(description)
    return (
        <div className="post">
         <Link to={`/article/${article.sys.id}`}> <h2 className="title" style={navStyle}>{name}</h2>
           {feuturedImage && <img className="featuredImage" width={600}
           src={feuturedImage.fields.file.url}
           alt={name} title={name}/>}</Link>
        <section dangerouslySetInnerHTML={{__html:postDescription}} />
        </div>
    )
}
