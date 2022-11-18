import * as Types from '../generated/types.graphql-gen';

export type CurrentCountQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type CurrentCountQuery = { __typename?: 'query_root', users_aggregate: { __typename?: 'users_aggregate', aggregate?: { __typename?: 'users_aggregate_fields', avg?: { __typename?: 'users_avg_fields', count?: number | null } | null, min?: { __typename?: 'users_min_fields', count?: number | null } | null, max?: { __typename?: 'users_max_fields', count?: number | null } | null } | null } };

export type CreateUserMutationVariables = Types.Exact<{
  name?: Types.InputMaybe<Types.Scalars['String']>;
}>;


export type CreateUserMutation = { __typename?: 'mutation_root', insertUser?: { __typename?: 'users', id: string } | null };

export type UpdateCountMutationVariables = Types.Exact<{
  id?: Types.InputMaybe<Types.Scalars['uuid']>;
}>;


export type UpdateCountMutation = { __typename?: 'mutation_root', updateCount?: { __typename?: 'users', count?: number | null, id: string } | null };
