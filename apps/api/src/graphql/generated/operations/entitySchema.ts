import { gql } from 'apollo-server-express';

export const entitySchema = gql`
  input AutoCompleteByEntityInput {
    entity: String!
    offset: Int
    totalCount: Int
    limit: Int
  }

  input AddEntityParent {
    id: String!
    entity: String
  }

  input AddEntityInput {
    entity: JSON
    parent: AddEntityParent
  }

  input ListEntityInput {
    entity: JSON
  }

  type AutoCompleteOptionShape {
    displayValue: String!
    value: String
    id: String
  }

  type AutoCompleteResponse {
    data: [AutoCompleteOptionShape]
    errorMessage: String
  }

  extend type Query {
    # Timestamp
    add261015(input: AddEntityInput): GenericEntity
    list261015(input: ListEntityInput): GenericEntity
    get261015(id: String): GenericEntity
    delete261015(id: String): GenericEntity
    update261015(entity: JSON): GenericEntity
    autoComplete261015(input: AutoCompleteByEntityInput): AutoCompleteResponse

    # Hoodie
    add279875(input: AddEntityInput): GenericEntity
    list279875(input: ListEntityInput): GenericEntity
    get279875(id: String): GenericEntity
    delete279875(id: String): GenericEntity
    update279875(entity: JSON): GenericEntity
    autoComplete279875(input: AutoCompleteByEntityInput): AutoCompleteResponse

    # Jeans
    add279876(input: AddEntityInput): GenericEntity
    list279876(input: ListEntityInput): GenericEntity
    get279876(id: String): GenericEntity
    delete279876(id: String): GenericEntity
    update279876(entity: JSON): GenericEntity
    autoComplete279876(input: AutoCompleteByEntityInput): AutoCompleteResponse
  }
`;
