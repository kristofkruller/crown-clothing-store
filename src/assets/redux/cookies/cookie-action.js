import { actionHandler } from "../action-handler";
import { COOKIE_ACTION_TYPES } from "./cookie-type";

export const setNecessaryCookies = () => actionHandler(COOKIE_ACTION_TYPES.NECESSARY_ONLY, "necessary"); 

export const setAllCookies = () => actionHandler(COOKIE_ACTION_TYPES.ACCEPT_ALL, "all");

export const declineCookies = () => actionHandler(COOKIE_ACTION_TYPES.DECLINE_ALL);

export const sendToServerAsync = async (pathOfBackEnd, cookieKey, cookie ) => {

  if (typeof pathOfBackEnd !== "string") { console.error("type of pathOfBackEnd must be string!") } else {

    try {
      const response = await fetch(pathOfBackEnd, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Cookie': 'name=' + cookieKey
      },
      body: JSON.stringify(cookie),
    });

    //wait for response until the json fully parsed before moving on the next step
    await response.json();
    
    } catch (error) {
      console.error(error);
    }

  }
}