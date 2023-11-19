import { useState } from 'react'

import { type InferRenderersForComponentBlocks } from '@keystatic/core'
import { teamMemberBio } from '../../keystatic/component-blocks'

type TeamMemberBioProps = InferRenderersForComponentBlocks<{
  bio: typeof teamMemberBio
}>['bio']

export const TeamMemberBio: TeamMemberBioProps = ({ bio }) => {
  const [count, setCount] = useState<number>(0)
  return (
    <div>
      <p>{bio}</p>
      <button onClick={() => setCount(count + 1)}>count: {count}</button>
    </div>
  )
}

// export function TeamMemberBio({ bio }: TeamMemberBioProps) {
//   return <p>{bio}</p>
// }
