import React,{useEffect} from 'react'
import PropTypes from 'prop-types'

const Test = ({getMessageTest,message}) => {
  useEffect(() => {
    getMessageTest();
  }, [])
  
  return (
    <div>test {message}</div>
  )
}

Test.propTypes = {}

export default Test