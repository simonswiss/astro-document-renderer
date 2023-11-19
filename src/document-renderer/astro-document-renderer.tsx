import { DocumentRenderer } from '@keystatic/core/renderer'
import { TeamMemberBio } from './team-member-bio'
import { type DocumentRendererProps } from '@keystatic/core/renderer'

export function AstroDocumentRenderer(props: DocumentRendererProps) {
  return (
    <DocumentRenderer
      document={props.document}
      componentBlocks={{
        teamMemberBio: TeamMemberBio,
      }}
    />
  )
}
