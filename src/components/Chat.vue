<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="chat">
    <h1>Chat with Bot</h1>
    <div class="chat-window">
      <div v-for="log in chatLogs" :key="log.id" class="chat-log">
        <p><strong>You:</strong> {{ log.message }}</p>
        <p><strong>Bot:</strong> {{ log.response }}</p>
      </div>
    </div>
    <form @submit.prevent="sendMessage">
      <input
        v-model="message"
        type="text"
        placeholder="Type a message..."
        required
      />
      <button type="submit">Send</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      message: "",
      chatLogs: [],
    };
  },
  methods: {
    async sendMessage() {
      const token = localStorage.getItem("token");
      try {
        const response = await axios.post(
          "http://127.0.0.1:8000/api/chat/chat",
          { message: this.message },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        this.chatLogs.push({
          message: this.message,
          response: response.data.response,
        });
        this.message = "";
      } catch (err) {
        console.error(err);
      }
    },
  },
};
</script>

<style scoped>
.chat {
  max-width: 600px;
  margin: auto;
  padding: 20px;
}
.chat-window {
  border: 1px solid #ccc;
  padding: 10px;
  height: 300px;
  overflow-y: scroll;
  margin-bottom: 10px;
}
</style>
