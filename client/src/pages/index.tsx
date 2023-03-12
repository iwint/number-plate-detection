import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { ReactElement } from 'react'
import CardBox from '../components/CardBox'
import LayoutGuest from '../layouts/Guest'
import SectionMain from '../components/SectionMain'
import { StyleKey } from '../interfaces'
import { gradientBgPurplePink } from '../colors'
import { appTitle } from '../config'
import { useAppDispatch } from '../stores/hooks'
import { setDarkMode, setStyle } from '../stores/styleSlice'

const StyleSelect = () => {
  const dispatch = useAppDispatch()

  dispatch(setDarkMode(false))

  const styles: StyleKey[] = ['white', 'basic']

  const router = useRouter()

  const handleStylePick = (e: React.MouseEvent, style: StyleKey) => {
    e.preventDefault()

    dispatch(setStyle(style))

    router.push('/dashboard')
  }

  return (
    <>
      <Head>
        <title>{appTitle}</title>
      </Head>
      <div className={`flex min-h-screen items-center justify-center ${gradientBgPurplePink}`}>
        <SectionMain>
          <h1 className={`text-white font-bold text-xl`}>Number Plate Detection</h1>
        </SectionMain>
      </div>
    </>
  )
}

StyleSelect.getLayout = function getLayout(page: ReactElement) {
  return <LayoutGuest>{page}</LayoutGuest>
}

export default StyleSelect
