import ChatSection from "../components/chat-section";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import React from "react";
import useChats from "../hooks/use-chats";
import { Loader2Icon } from "lucide-react";

const Chat = () => {
  const {
    chat_ref,
    chatMessage,
    msg,
    setMessage,
    sendMessage,
    openUserChat,
    personName,
    loadChats,
    userData,
  } = useChats();
  return (
    <>
      <ChatSection openUserChat={openUserChat} personName={personName}>
        <section className="h-[95%] w-full flex justify-baseline flex-col items-end">
          <div
            ref={chat_ref}
            className="relative chat-section h-[91vh] px-4 py-8 w-full flex justify-baseline flex-col items-center"
          >
            <div className="typing absolute top-4 flex flex-col justify-center items-center">
              <p className="text-lime-600 text-lg">Typing...</p>
              {loadChats && <Loader2Icon className="animate-spin" />}
            </div>
            {chatMessage.map((item, i) => {
              return (
                <React.Fragment key={i}>
                  {item.id !== userData.id ? (
                    <div
                      className="send my-1 flex flex-col rounded-t-2xl justify-baseline items-start gap-1 self-start px-6 p-5 bg-amber-300"
                    >
                      <h3>{item.msg}</h3>
                      <p className="flex-col-reverse">
                        <i className="text-sm">{item.date}</i>
                      </p>
                    </div>
                  ) : (
                    <div  
                      className="receive my-1 flex-col rounded-t-2xl justify-baseline items-start gap-1 px-6 self-end flex p-5 bg-amber-300"
                    >
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
            <Button
              className="h-12 cursor-pointer"
              variant="destructive"
              onClick={sendMessage}
            >
              Send
            </Button>
          </article>
        </section>
      </ChatSection>
    </>
  );
};

export default Chat;
