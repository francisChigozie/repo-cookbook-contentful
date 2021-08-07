import React, { useEffect,useState} from "react";
import { client } from "../client";
import { useParams } from "react-router";

 const navStyle = {
        color: 'orange'
    }


function ArticleDetail() {
const {id } = useParams()
    const [article, setArticle] = useState(null);

    useEffect(() => {
      
       client.getEntries()
      .then((response) => {
       console.log(response)
        setArticle(response.items.find(item => item.sys.id === id))
      })
      .catch(console.error)

    }, []);

  return (
    <div className="App-detail">
    {article ? (
    <div>
        <h1>{article.fields.name}</h1>
       <img src={article.fields.feuturedImage.fields.file.url} width={800} />
       <h4 style={navStyle}>Very Tasteful. Just try it now</h4>
       <a href="" className="order">Place an Order</a>
        </div>):"loading..."}


    </div>
  );
}
export default ArticleDetail;