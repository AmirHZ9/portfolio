import {gql} from "@apollo/client"

 const  projects = gql`
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

const Get_Project_info = gql`
  query getProject($id:ID!) {
  project(where: {id: $id}) {
    name
    projectCover {
      url
    }
    tech
    url
    description
  }
}

`
export {projects,Get_Project_info}