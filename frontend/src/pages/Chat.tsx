import ChatSection from "../components/chat-section";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import React from "react";
import useChats from "../hooks/use-chats";

const Chat = () => {
  const { chat_ref, chatMessage, msg, setMessage, sendMessage, openUserChat, personName} = useChats();
  return (
    <>
      <ChatSection openUserChat={openUserChat} personName={personName}>
        <section className="h-[96.4%] w-full flex justify-baseline flex-col items-end">
          <div ref={chat_ref} className="chat-section h-[91vh] px-4 py-8 w-full flex justify-baseline flex-col items-center">
            {chatMessage.map((item) => {
              return (
                <React.Fragment key={item.id}>
                  {item.senderID === "123" ? (
                    <div className="send my-1 flex flex-col rounded-t-2xl justify-baseline items-start gap-1 self-start px-6 p-5 bg-amber-300">
                      <h3>{item.msg}</h3>
                      <p className="flex-col-reverse">
                        <i className="text-sm">{item.date}</i>
                      </p>
                    </div>
                  ) : (
                    <div className="receive my-1 flex-col rounded-t-2xl justify-baseline items-start gap-1 px-6 self-end flex p-5 bg-amber-300">
                      <h3>{item.msg}</h3>
                      <p className="flex-col-reverse">
                        <i className="text-sm">{item.date}</i>
                      </p>
                    </div>
                  )}
                </React.Fragment>
              );
            })}
          </div>
          <article className="h-fit w-full flex justify-baseline items-center">
            <Input
              className="h-12"
              id="msg"
              value={msg}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  sendMessage();
                }
              }}
              type="text"
              placeholder="Type your message" 
              required
            />
            <Button className="h-12 cursor-pointer" variant="destructive" onClick={sendMessage}>
              Send
            </Button>
          </article>
        </section>
      </ChatSection>
    </>
  );
};

export default Chat;
