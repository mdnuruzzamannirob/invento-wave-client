import { useState } from "react";
import { MdNotifications, MdNotificationsActive } from "react-icons/md";

const AdminNotificationModal = () => {
  const [notificationToggle, setNotificationToggle] = useState(false);

  return (
    <div className="md:relative flex items-center justify-center">
      <button onClick={() => setNotificationToggle(!notificationToggle)}>
        {notificationToggle ? (
          <MdNotificationsActive className="w-7 h-7" />
        ) : (
          <MdNotifications className="w-7 h-7" />
        )}
      </button>
      {notificationToggle && (
        <div className="w-[280px] md:w-80 absolute top-24 md:top-[70px] right-5 md:right-0 bg-white rounded-md p-5 border-2 overflow-hidden">
          TODO :
        </div>
      )}
    </div>
  );
};

export default AdminNotificationModal;
