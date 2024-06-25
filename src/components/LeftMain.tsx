import React from 'react'
import TitleSection from './TitleSection'
import Container from './Container'
import Skills from './Skills'
import About from './About'
import Footer from './Footer'

const LeftMain = () => {
  return (
    <div>
        <Container><TitleSection title='Senior Product Designer' location='Delaware, USA' published='posted 2 days ago' salary='$300k-$400k'/></Container>
        <Container><Skills language="English" type="Full time" experience="3+"/></Container>
        <Container><About/></Container>
        <Container><Footer/></Container>
    </div>
  )
}

export default LeftMain