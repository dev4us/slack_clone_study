import { Resolvers } from "src/types/resolvers";
import {
  SendMessageMutationArgs,
  SendMessageResponse
} from "src/types/graphql";
import Channel from "../../../../src/entities/Channel";
import Message from "../../../../src/entities/Message";

const resolvers: Resolvers = {
  Mutation: {
    SendMessage: async (
      _,
      args: SendMessageMutationArgs,
      { pubSub }
    ): Promise<SendMessageResponse> => {
      try {
        const { nickname, contents, thumbnail, innerChannelId } = args;

        const isExistChannel = await Channel.findOne({ id: innerChannelId });

        if (!isExistChannel) {
          return {
            ok: false,
            error: "채널이 존재하지 않습니다."
          };
        }

        const newMessage = await Message.create({
          nickname,
          thumbnail,
          contents,
          innerChannelId
        }).save();

        pubSub.publish("newMessage", {
          sendMessageSubscription: newMessage
        });

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
