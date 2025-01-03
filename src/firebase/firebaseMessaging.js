import { getMessaging, getToken, onMessage } from "firebase/messaging";
import app from "../../public/firebaseConfig";

const messaging = getMessaging(app);

// Pobierz token urządzenia
const requestPermission = async () => {
    try {
        const token = await getToken(messaging);
        console.log("Device token:", token);
    } catch (error) {
        console.error("Error getting token:", error);
    }
};

// Odbieraj wiadomości
const listenForMessages = () => {
    onMessage(messaging, (payload) => {
        console.log("Message received:", payload);
    });
};

export { requestPermission, listenForMessages };