import { gql } from "@apollo/client";

const sendMessage = gql`
  mutation sendMessage($name: String!, $email: String!, $text: String!) {
    createMessage(data: {name: $name, email: $email, text: $text }){
        id
    }
  }
`;

export { sendMessage };
