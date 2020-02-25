import gql from "graphql-tag";

export const GET_CHANNELS_QUERY = gql`
  query {
    GetChannels {
      ok
      error
      channels {
        id
        channelName
      }
    }
  }
`;

export const CREATE_CHANNEL_MUTATION = gql`
  mutation createChannelMutation($channelName: String!) {
    CreateChannel(channelName: $channelName) {
      ok
      error
    }
  }
`;
