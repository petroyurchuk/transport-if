import axios from "axios";
import { orderSchemaT } from "@/lib/types";

export const sendDataToBot = async (data: orderSchemaT) => {
  try {
    console.log(1);
    const chat_id = process.env.NEXT_PUBLIC_KEY_USER_ID;
    console.log(chat_id);
    if (!chat_id) return;
    console.log(2);

    const params = new URLSearchParams({
      chat_id,
      text: `Name of customer: ${data.name}`,
    });
    console.log(3);

    const response = await axios.post(
      `https://api.telegram.org/bot${process.env.NEXT_PUBLIC_API_KEY}/sendMessage?${params}`
    );
    console.log(4);

    console.log(response);
  } catch (error) {
    console.log(error);
  }
};
