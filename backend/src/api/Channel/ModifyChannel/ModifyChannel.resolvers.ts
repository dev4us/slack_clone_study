import { Resolvers } from "src/types/resolvers";
import {
  ModifyChannelMutationArgs,
  ModifyChannelResponse
} from "../../../../src/types/graphql";
import Channel from "../../../../src/entities/Channel";

const resolvers: Resolvers = {
  Mutation: {
    ModifyChannel: async (
      _,
      args: ModifyChannelMutationArgs
    ): Promise<ModifyChannelResponse> => {
      try {
        const { id, nextName } = args;

        const ExistChannel = await Channel.findOne({ id });

        if (!ExistChannel) {
          return {
            ok: false,
            error: "존재하지 않는 채널입니다."
          };
        }

        ExistChannel.channelName = nextName;
        ExistChannel.save();

        return {
          ok: true,
          error: null
        };
      } catch (error) {
        return {
          ok: false,
          error: error.message
        };
      }
    }
  }
};

export default resolvers;
