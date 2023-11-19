import { component, fields } from '@keystatic/core'

export const teamMemberBio = component({
  label: 'Team Member Bio',
  preview: () => null,
  schema: {
    bio: fields.text({ label: 'Bio', multiline: true }),
  },
})
