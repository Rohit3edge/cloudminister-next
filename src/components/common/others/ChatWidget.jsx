"use client";

import React, { useEffect, useState } from "react";

const ChatWidget = () => {
  const [isChatLoaded, setIsChatLoaded] = useState(false);

  useEffect(() => {
    // if (typeof window === "undefined") return; // Ensure code runs only on client

    const tawkScript = document.createElement("script");
    tawkScript.src = "https://embed.tawk.to/5e108e8027773e0d832bd4ff/default";
    tawkScript.async = true;
    tawkScript.charset = "UTF-8";
    tawkScript.setAttribute("crossorigin", "*");

    document.body.appendChild(tawkScript);

    tawkScript.onload = () => {
      setIsChatLoaded(true);
      if (window.Tawk_API) {
        window.Tawk_API.onLoad = function () {
          console.log("Tawk.to Chat Loaded!");
        };
      }
    };

    return () => {
      if (window.Tawk_API) {
        window.Tawk_API = null;
      }
    };
  }, []);

  // useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     window.openChat = () => {
  //       if (window.Tawk_API) {
  //         window.Tawk_API.toggle();
  //       } else {
  //         console.warn("Tawk.to API not loaded yet");
  //       }
  //     };
  //   }
  // }, [isChatLoaded]);

  return null; // No UI needed since Tawk.to injects the chat widget
};

export default ChatWidget;
