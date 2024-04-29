import { gql } from 'urql';

const USERS = gql`
{
    user {
      getList(param: {limit: 100, page: 1}) {
        limit
        page
        totalPage
        totalData
        data {
          id
          name
          email
          password
          profileImage
          createdAt
          createdBy
          updatedAt
          updatedBy
          deletedAt
          deletedBy
          isDeleted
        }
      }
    }
}`;

export { USERS };