import React, {useEffect, useState} from 'react'
import Box from '../components/Box/Box'
import axios from 'axios'
import {useRouter} from 'next/router'

function profil(props:any) {
  const {data} = props

  return(
    <>
      <Box>
        <h1>le profil</h1>
      </Box>
    </>
  )
}

export default profil
