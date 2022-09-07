import React from "react";

function EmailIcon({ style }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 512 512"
    height={style.height}
    width={style.width}>
      <path fill={style.fill} d="M256 352c-16.53 0-33.06-5.422-47.16-16.41L0 173.2V400c0 26.5 21.49 48 48 48h416c26.51 0 48-21.49 48-48V173.2L303.2 335.7C289.1 346.6 272.5 352 256 352zM16.29 145.3l212.2 165.1c16.19 12.6 38.87 12.6 55.06 0l212.2-165.1C505.1 137.3 512 125 512 112c0-26.51-21.5-48-48-48H48C21.49 64 0 85.49 0 112c0 13 6.01 25.3 16.29 33.3z"></path>
    </svg>
  );
}

export default EmailIcon;
