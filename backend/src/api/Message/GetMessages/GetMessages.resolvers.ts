import { Resolvers } from "src/types/resolvers";
import Message from "../../../../src/entities/Message";

const resolvers: Resolvers = {
  Query: {
    GetMessages: async (_, args) => {
      //ㅗ직 시작
      try {
        const { innerChannelId } = args;
        // == const innerChannelId = args.innerChannerId;

        const messages = await Message.find({ innerChannelId });

        return {
          ok: true,
          error: null,
          messages: messages
        };
      } catch (error) {
        return {
          ok: false,
          error: error.message,
          messages: null
        };
      }
    }
  }
};

export default resolvers;
