import type { RequireOnlyOne } from "../utils/fieldRequired";

type UnreadMessagesInfoFields = {
  groupId?: string;
  chatId?: string;
  userId?: string;
};

export type UnreadMessagesInfo = RequireOnlyOne<UnreadMessagesInfoFields>;
