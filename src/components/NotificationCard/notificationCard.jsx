import React, { useEffect, useState } from "react";
import "./notificationCard.css";

const NotificationCard = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 10000); // 4 seconds
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="notification-card">
      Hi There. We are currently building our website. 
    </div>
  );
};

export default NotificationCard;
