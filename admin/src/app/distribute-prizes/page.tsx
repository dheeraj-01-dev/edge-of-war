"use server"
import { getLiveBattles } from '@/api/battle'
import Positions from '@/components/contest/Positions'
import ScafFold from '@/server/components/scafFold/ScafFold'
import React from 'react'

const page = async () => {
    const battles = await getLiveBattles();
  return (
    <ScafFold>
        <div>
            <Positions slots={battles.data?.battles.settings.slots} battle='' teams={[[]]} positions={[[]]} />
        </div>
    </ScafFold>
  )
}

export default page