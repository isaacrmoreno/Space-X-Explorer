import { gql } from '@apollo/client';

export const GET_LAUNCH_DETAILS = gql`
query {
  launches {
    mission_name
    id
    launch_year
    details
    links {
      article_link
      flickr_images
    }
  }
}
`
