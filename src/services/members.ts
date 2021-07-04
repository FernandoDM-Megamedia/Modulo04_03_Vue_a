import { Members } from '@/types'

export const memberListService = async (
  memberName: string
): Promise<Members[]> => {
  return fetch(`https://api.github.com/orgs/${memberName}/members`)
    .then(response => response.json())
    .then(json => json)
}

export const memberService = async (id: string): Promise<Members> => {
  return fetch(`https://api.github.com/users/${id}`)
    .then(response => response.json())
    .then(json => json)
}
