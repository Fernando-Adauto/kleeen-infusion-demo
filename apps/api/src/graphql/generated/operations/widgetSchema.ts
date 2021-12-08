/* eslint-disable max-lines */
import { gql } from 'apollo-server-express';

export const widgetSchema = gql`
  type GraphResult {
    crossLinking: JSON
    format: JSON
    results: JSON
    series: JSON
  }

  type MultiTransFormationResults {
    crossLinking: JSON
    format: JSON
    results: JSON
    transformation: String!
  }

  type ListingResult {
    data: JSON
    format: JSON
    pagination: JSON
  }

  input DataListingArgs {
    attributes: JSON!
    entity: String!
    filters: JSON
    pagination: JSON
    sorting: [JSON!]
  }

  input MultiTransFormationArgs {
    attributes: [String]
    entity: String!
    filters: JSON
    transformations: [String!]!
  }

  input CustomActionArgs {
    entity: String!
    functionName: String!
    filters: JSON
  }

  type Filters {
    accessLevel: AccessLevel!
    name: String!
    statisticalType: String!
  }

  type WorkflowFiltersResult {
    filters: [Filters!]!
  }

    extend type Query {
          # Widget Summary
    # View: hoodies
    # Widget: Table of Hoodie 2
    # Thing: Hoodie
    # Attributes: hoodie
    # Widget type: goal
    object_listing_774a5f4e_a6b0_49fe_a5a9_ca01abadf081(input: DataListingArgs): ListingResult

    # Widget Summary
    # View: hoodies
    # Widget: Table of  hoodies
    # Thing: Hoodie
    # Attributes: hoodie
    # Widget type: goal
    object_listing_a571ff29_a98d_4519_9c43_c04dc40f5e27(input: DataListingArgs): ListingResult

    # Widget Summary
    # Widget: Widget 1
    # Value: hoodie
    widget_statisticsc1f9472f_9842_4b2a_8c0e_984e898e6af1(input: MultiTransFormationArgs): [MultiTransFormationResults]
    }
  `;
