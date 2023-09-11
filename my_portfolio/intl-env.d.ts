import IMessageID from "./src/lang/English";

declare global {
  namespace FormatjsIntl {
    interface Message {
      ids: keyof typeof IMessageID;
    }
  }
}
