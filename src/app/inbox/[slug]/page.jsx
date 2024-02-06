import React from 'react'
import {data} from "@/app/components/Main"



export default function page({params}) {
  const mailBox = data.find(datum => datum.title.split(' ').join('-').toLowerCase()== params.slug)
  return (
    <div>
      <h2>{mailBox.sender}</h2>
    </div>
  )
}

