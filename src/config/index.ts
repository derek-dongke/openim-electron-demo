export const WS_URL = "ws://223.70.120.178:10001";
export const API_URL = "http://223.70.120.178:10002";
export const CHAT_URL = "http://223.70.120.178:10008";

export const getWsUrl = () => localStorage.getItem("wsUrl") || WS_URL;
export const getApiUrl = () => localStorage.getItem("apiUrl") || API_URL;
export const getChatUrl = () => localStorage.getItem("chatUrl") || CHAT_URL;
