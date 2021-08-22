import React, { useEffect,useState, Link} from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { client } from "../client";

import { useParams } from "react-router";

 const navStyle = {
        color: 'orange',
        marginTop: '7px'
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
    <div className="App-detail mt-5">
    {article ? (
    <div>
        <h1>{article.fields.name}</h1>
        <a href="/">
       <img src={article.fields.feuturedImage.fields.file.url} width={800} /></a>
       <h4 style={navStyle}>Very Tasteful. Just try it now</h4>
       <a href="" className="order mt-2">Place an Order</a>
        </div>): <h3>"loading..."</h3>}


    </div>
  );
}
export default ArticleDetail;