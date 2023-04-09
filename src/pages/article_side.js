import React, { useContext, useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Heading from '../components/heading'
import { Link } from 'react-router-dom'

import DataContext from '../context'
import Footer from '../components/footer'


export const LoadingText = ({x, y, z}) => {
  return (
    <div className='h-5 w-full mt-2 animation rounded'>
      <div className={`background-masker btn-divide-left ${x}`}>
      </div>
      <div className={`background-masker btn-divide-left ${y}`}>
      </div>
      <div className={`background-masker btn-divide-left ${z}`}>
      </div>
    </div>
  )
}


const ArticleSide = ({footer}) => {
    let navigate = useNavigate()
    let { newsID } = useParams()


    const [data, setData] = useState({content: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua", title:"Lorem ipsum dolor sit "})

    const [loading, setLoading] = useState(true) 


    useEffect(() => {
      if (loading == false) {document.title = data.short_title + " - Liberale Schüler BaWu"}
    }, [loading])

    useEffect(() => {
      document.title = "Artikel - Liberale Schüler BaWü"
      window.scrollTo(0, 0)

      footer()
    }, []);

    
    useEffect(() => {
      try {
          fetch('https://api.wrire.com/api/article/' + newsID,  {
            method: 'GET',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
            }
          }).then((response) => response.json().then((d) => {setData(d); setLoading(false)}))
        } catch (error){console.log(error)}
    }, [])

    return (
        <div>
          {loading ?<div className='fixed flex w-full -z-20 left-0 top-[5.5rem] h-52 3xs:h-64 xs:h-80 md:h-96 bg-magenta opacity-10'>
            <div className='loader z-20'></div>
          </div> :
          <img className='fixed w-full -z-20 left-0 top-[5.5rem] h-52 3xs:h-64 xs:h-80 md:h-96 object-cover duration-200' src={"https://api.wrire.com" + data.thumbnail} />}
          <div className='absolute left-0 w-full bg-white z-10 pt-6 mt-52 3xs:mt-64 xs:mt-80 md:mt-96'>
            <div className='mx-auto max-w-[60rem] w-[90%]'>
              
              {!loading ?
              <div>
                <h1 className={`font-extrabold text-xl 3xs:text-2xl sm:text-[27px] mx-auto`}>{data.title}</h1>
                <p className={`mt-2 default-text pb-12 `}>
                  {data.content}
                </p>
              </div> :
              <div>
                <div className='animation h-8 sm:h-10 rounded'>
                </div>
                <div className='mt-5'>
                  <LoadingText x="left-[15%]" y="left-[50%]" z="left-[90%]" />
                  <LoadingText x="left-[20%]" y="left-[40%]" z="left-[80%]" />
                  <LoadingText x="left-[30%]" y="left-[45%]" z="left-[60%]" />
                  <LoadingText x="left-[8%]" y="left-[25%]" z="left-[75%]" />
                  <LoadingText x="left-[22%]" y="left-[66%]" z="left-[88%]" />
                  <LoadingText x="left-[11%]" y="left-[55%]" z="left-[78%]" />
                  <LoadingText x="left-[17%]" y="left-[47%]" z="left-[85%]" />
                </div>


              </div>
              }
            </div>
            <Footer />
          </div>
        </div>
    )
}

export default ArticleSide