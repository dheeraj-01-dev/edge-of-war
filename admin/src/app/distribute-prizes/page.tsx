"use server"
import { getLiveBattles } from '@/api/battle'
import ScafFold from '@/server/components/scafFold/ScafFold'
import React from 'react'

const page = async () => {
    const battles = await getLiveBattles();
  return (
    <ScafFold>
        <div>
            page
        </div>
    </ScafFold>
  )
}

export default page