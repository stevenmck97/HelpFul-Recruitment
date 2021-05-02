import React from 'react';
import '../assets/css/livechat.css'
// import { formatRelative } from 'date-fns';

const formatDate = date => {
  let formattedDate = '';
  if (date) {
    // Convert the date in words relative to the current date
    // formattedDate = formatRelative(date, new Date());
    // Uppercase the first letter
    formattedDate =
      formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);
  }
  return formattedDate;
};

const Message = ({
  createdAt = null,
  text = '',
  displayName = '',
  photoURL = '',
}) => {
  if (!text) return null;

  return (
    <div className="media w-50 mb-3" style={{ backgroundColor: "#252628" }}>
      {photoURL ? (
        <img
          src={photoURL}
          alt="Avatar"
          className="rounded-circle"
          width="50"
          height={45}
        />
      ) : null}
      <div className="media-body" >
        <div className="media-body ml-3" >
          {displayName ? (
            <p className="text-small mb-0 text-white">{displayName}</p>
          ) : null}
          {createdAt?.seconds ? (
            <span className="text-gray-500 text-xs" >
              {formatDate(new Date(createdAt.seconds * 1000))}
            </span>
          ) : null}
        </div>
        <p className="rounded py-2 px-3 mb-2" style={{ backgroundColor: "#252828" }}>{text}</p>
      </div>
    </div>
  );
};

export default Message;
