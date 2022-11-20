import { createStore } from "@stencil/store";

type Message = { author: string, text: string }

const { state } = createStore({
    topics: <string[]>[],
    messages: <{ [key: string]: Message[] }>{}
});

export async function init() {
    return window.webxdc.setUpdateListener((message) => {
        const {topic, author, text} = message.payload
        if (!state.topics.includes(topic)) {
            state.topics = [...state.topics]
        }
        if (!Array.isArray(state.messages[topic])) {
            state.messages[topic] = []
        }
        state.messages[topic].push({author, text})
    }, 0)
}

export async function sendMessage(topic:string, text:string) {
    window.webxdc.sendUpdate({payload: {author:window.webxdc.selfName, topic, text}}, `${window.webxdc.selfName} sent a message in ${topic}: ${text}`)
}


import { WebXdc } from "webxdc-types";

type Payload = Message & { topic: string }

declare global {
    interface Window {
        webxdc: WebXdc<Payload>;
    }
}


export default state;