import {gql} from "@apollo/client"

export const  projects = gql`
  query{
    projects{
        id,
      name,
      tech,
      url,
      projectCover{
        url
    }
    }
  }
`