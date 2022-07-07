import React, { useEffect, useState } from 'react'
import type { NextPage } from 'next'
import RandomAnimalLayout from 'components/RandomAnimalLayout'
import { getRandomDog } from 'lib/repo'
import Layout from 'components/Layout'
import { BasicArticle } from 'lib/model'
import { Box, Container } from '@mui/material'
import Loader from 'components/Loader'

const RandomDog: NextPage = () => {
  const [item, setItem] = useState<BasicArticle | null>(null)

  const loadApiData = async () => {
    let resp = await fetch('/api/dogs', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })

    let article = (await resp.json()) as BasicArticle
    setItem(article)
  }
  const handleNext = async () => {
    await loadApiData()
  }
  useEffect(() => {
    const fn = async () => {
      loadApiData()
    }
    fn()
  }, [])

  return <>{item && <RandomAnimalLayout data={item} onRefresh={handleNext} />}</>
}
export default RandomDog
