import React, {useState, useContext, useEffect} from 'react'
import { Link } from 'react-router-dom'
import ArticleView from '../components/article_view'
import Heading from '../components/heading'
import { DataContext } from '../context'

const News = () => {
  const articleData = useContext(DataContext)

  useEffect(() => {
    document.title = "Landesvorstand - Liberale Schüler BaWü"
    window.scrollTo(0, 0)
  }, []);

  return (
    <div>
      <Heading text="Neuigkeiten" centered={true} background={false} />
      <div className='mt-6'>
        {
          articleData.map((data, index) => {
            return(<ArticleView title={data.title} preview={data.content} img={"https://api.wrire.com" + data.thumbnail} link={"/neuigkeiten/" + data.id}  />)
          })
        }
      </div>
    </div>
  )
}

export default News