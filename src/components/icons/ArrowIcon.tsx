import React from "react";

type Props = {
  size?: number;
  fillColor?: string;
};

const ArrowIcon = ({ size = 30, fillColor = "white" }: Props) => {
  return (
    <svg
      enableBackground="new 0 0 156 156"
      height={size}
      viewBox="0 0 156 156"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="m89.79 48.82c-.3.47-.75.83-1.01.83-.27 0-.47.14-.47.33 0 .18.3.33.67.33.57 0 .67.22.67 1.48 0 1.37-.07 1.49-.92 1.58-.6.07-.96.32-1.03.75-.07.36-.42.89-.78 1.19-1.07.86-.47 1.66 1.23 1.66 1.27 0 1.41.08 1.27.65-.1.4-.5.69-1.03.75-.69.08-.92.33-1.13 1.27-.15.63-.19 1.51-.1 1.92.14.63.4.75 1.67.75 1.7 0 1.93.43.57 1.08-1.1.53-1.36 1.56-.53 2.15.33.24.47.44.3.44-.8.01-19.88 1.06-27.35 1.51-12.14.73-36.59 2.45-37.42 2.65-.9.21-1.2 1.03-.59 1.65.36.37 1.01.46 2.41.35 1.75-.14 1.69-.11-.75.35-3.37.63-4.26 1.01-4.11 1.77.16.78 1.21.72 10.95-.69 4.5-.65 9.82-1.26 11.84-1.36l3.67-.18-5 .62c-4.34.54-16.78 2.57-20.18 3.3-.87.18-1.17.42-1.17.92 0 .85.13.84 9.67-.79 4.4-.76 10.86-1.68 14.34-2.06 7.07-.76 26.97-2.04 30.85-1.99l2.5.04-2 .29c-2.96.44-26.98 3.1-40.53 4.49-9.14.94-12.15 1.36-13.17 1.86-1.47.7-2.76 2.18-2.3 2.63.34.34 14.31-.91 38.66-3.46 10.97-1.15 17.54-1.7 18.51-1.56l1.5.22-1.84.23c-1.01.13-11.37 1.14-23.01 2.25s-23.13 2.24-25.52 2.5c-2.4.27-5.24.48-6.37.48-2.13 0-3.85.73-2.73 1.16.29.11 8.47-.55 18.18-1.47 24.58-2.34 30.9-2.65 13.61-.68-4.97.57-10.35 1.24-12.01 1.49-1.65.26-6.84.79-11.51 1.18-12.54 1.05-12.17.99-12.29 2.06-.13 1.16.45 1.31 3.72.99 2.13-.21 2.65-.17 2.89.25.25.44.65.41 3.22-.21 3.98-.96 3.9-.95 21.31-2.25 25.42-1.89 28.09-1.9 8-.01-17.21 1.62-32.45 3.37-32.95 3.8-.22.19-1.07.38-1.9.44-1.47.1-1.5.13-1.5 1.27v1.17l3.09-.07 3.08-.07.22 1.35c.12.73.42 1.43.65 1.52.24.09 6.57-.38 14.04-1.04 16.98-1.5 33.24-2.76 39.12-3.03 2.47-.11 5.18-.29 6-.39 1.13-.14 1.41-.09 1.13.2-.22.23-6.74.97-16.34 1.85-29.05 2.68-47.65 4.57-48.06 4.89-.22.17-.37.95-.33 1.71.05 1.13.2 1.42.77 1.5.38.06 14.81-1.19 32.02-2.77s32.09-2.88 33.04-2.9c1.17-.02 1.97.16 2.52.57.91.69 1.65 2.53 1.6 3.96-.02.53.25 1.28.6 1.67s.8 1.18 1 1.78c.33.97.3 1.08-.3 1.08-.37 0-.75.22-.85.5-.29.77.56 1.58 1.42 1.36.61-.16.8.01 1.14 1.01.38 1.14.47 1.19 1.67 1.03 1.03-.14 1.3-.05 1.43.47.21.8 1.5.85 1.8.07.12-.32-.01-.69-.35-.93-.48-.35-.27-.55 1.7-1.58 1.23-.65 3.01-1.28 3.92-1.4.93-.12 1.93-.29 2.27-.39.63-.18.75-1.15.2-1.69-.26-.26-.05-.47.72-.73.6-.2 1.37-.37 1.72-.37.58 0 .75-.33.62-1.23-.03-.22.58-.55 1.38-.75 2.94-.71 3.11-.81 3.23-1.85.06-.53.42-1.2.81-1.48 5.44-3.98 7.67-5.29 9.37-5.5 1.9-.24 3.1-1.1 2.76-1.99-.19-.5 1.31-1.87 2.04-1.87.18 0 .93-.53 1.63-1.16 2.5-2.23 7.79-6.18 8.27-6.18 1.06 0 .43-1.06-1.43-2.41-1.53-1.11-1.96-1.61-1.94-2.26.03-.76-.07-.83-1.17-.77-.93.05-1.5-.19-2.54-1.07-4.62-3.95-17.88-12.1-30.82-18.95-2.3-1.22-4.39-2.45-4.62-2.72s-.86-.5-1.4-.5c-.6 0-1.27-.3-1.71-.77-1.12-1.17-3.38-1.21-4.13-.07zm6.18 3.15c.42.27.42.34-.02.48-1.13.36-3.97.54-3.97.24 0-.24.63-.43 3.34-1 .09-.02.38.11.65.28zm4.85 2.26c1 .49 1.83 1.01 1.83 1.16s-.52.27-1.15.27c-.93 0-1.17-.14-1.25-.75-.07-.55-.35-.78-1.02-.85-.5-.05-.84-.24-.74-.4.26-.44.26-.44 2.33.57zm4.5 2.61c0 .08-.3.15-.67.15s-.67-.23-.67-.52c0-.41.13-.44.67-.15.37.2.67.44.67.52zm2.67 1.35c0 .07-.32.13-.68.13-.37 0-.59-.15-.48-.33.18-.3 1.16-.13 1.16.2zm-11.34 4.15c-1 .14-2.44.24-3.17.23l-1.33-.02 1.33-.23c.73-.13 2.17-.23 3.17-.23h1.84zm23.48 2.73c3.54 2.17 7.54 4.89 7.54 5.13 0 .48-1.29 0-1.43-.53-.11-.42-.57-.71-1.37-.85-.67-.12-1.2-.42-1.2-.68 0-.85-1.3-1.16-5.64-1.36-4.07-.19-4.35-.16-4.58.43-.34.91-.8 1.13-2.3 1.1l-1.33-.03 1.12-.32c.64-.18 1.19-.58 1.28-.93.12-.44.62-.69 1.72-.85.87-.13 1.74-.39 1.98-.59.57-.46.5-1.89-.1-2.12-.27-.1-.41-.35-.3-.53.28-.46.81-.21 4.61 2.13zm-6.5-1.61c-.23.23-7.64 1.12-12.84 1.55-8.04.66-6.07.15 2.87-.76 9.24-.93 10.18-1 9.97-.79zm-19.06 2.08c-.31.08-.93.09-1.34.02s-.15-.14.59-.15c.73-.01 1.07.05.75.13zm12.84 3.02c-.6.07-1.57.07-2.17 0s-.12-.13 1.08-.13c1.21 0 1.69.06 1.09.13zm-5.75.44c-1.37.13-3.41.23-4.5.22l-2-.02 2.34-.2c1.3-.11 3.29-.21 4.5-.22l2.17-.02zm-7.93.56c-.24.09-.67.09-1 0s-.15-.17.42-.17c.57.01.82.08.58.17zm-43.36 2.34c-.24.09-.67.09-1 0-.33-.1-.15-.17.42-.17s.82.07.58.17zm30.36 0c-.24.09-.67.09-1 0-.33-.1-.15-.17.42-.17.56 0 .81.07.58.17zm50.71.91c.59.44.58.46-.08.67-.39.12-.98.01-1.38-.27-.67-.46-.67-.49-.08-.65.33-.09.69-.17.78-.18s.43.18.76.43zm-41.79.18c-.47.27-2.73.5-3.5.35-.65-.13 1.37-.6 2.67-.62.89-.01 1.17.07.83.27zm33.65 1.81c-.23.23-5.67 1.05-17.84 2.68-6.27.84-11.49 1.52-11.58 1.52s-.09-.28 0-.65c.1-.39.52-.69 1.05-.75.6-.07.87-.29.84-.68-.03-.33.08-.58.25-.58.16 0 3.35-.23 7.05-.52 3.7-.28 9.39-.64 12.59-.78 3.2-.15 6.27-.29 6.81-.32.53-.03.91.01.83.08zm12.78 1.25 2.04 1.38-.8.6c-.73.55-.81.55-.92.03-.2-.97-.98-1.32-2.55-1.14-1.43.17-1.47.15-1.4-.8.04-.63.3-1.04.73-1.18.37-.12.71-.23.77-.25.05-.01.99.59 2.13 1.36zm-48.53-.85c-.11.11-.4.12-.63.03-.27-.11-.2-.18.2-.2.33-.01.53.07.43.17zm-23.67 4.35c-.31.08-.93.09-1.33.02-.41-.07-.15-.14.58-.15.74-.01 1.07.05.75.13zm48.68-.01c-.11.11-.4.12-.63.03-.27-.1-.2-.18.2-.2.33-.02.54.06.43.17zm21.82.62c-.8.59-1.3.73-1.83.53-.81-.31-1.33-.25-18.48 1.98-13.54 1.77-14.08 1.82-14.08 1.37 0-.31 13.84-2.29 24.52-3.52 12.23-1.41 11.26-1.38 9.87-.36zm-23.97-.26c-.24.09-.67.09-1 0s-.15-.17.42-.17c.56.01.82.08.58.17zm-2.5.32c-.33.09-.83.09-1.17 0-.32-.08-.05-.15.58-.15.64 0 .91.07.59.15zm-4.25.62c-2.84.49-3.88.58-3.57.28.26-.25 3.37-.7 4.9-.71.64 0 .03.19-1.33.43zm-4.77.7c-.11.11-.4.12-.63.03-.27-.1-.2-.18.2-.2.33-.02.53.06.43.17zm-2.4.45c-1.5.39-2.57.39-2.34.01.11-.18.9-.32 1.77-.3 1.4.03 1.46.06.57.29zm-8.94 1.55c-.11.11-.4.12-.63.03-.27-.11-.2-.18.2-.2.33-.02.53.06.43.17zm-2.4.38c-.57.09-1.17.29-1.4.47-.22.17-3.37.53-7 .79-12.78.91-13.86.81-3.27-.29 5.87-.61 11.12-1.11 11.67-1.11h1zm30.08 1.29c-.11.11-.4.12-.63.03-.27-.11-.2-.18.2-.2.33-.02.54.06.43.17zm-2.48.36c-.23.09-.6.09-.83 0s-.05-.17.42-.17c.46.01.64.08.41.17zm-2.34.34c-.24.1-.67.1-1 0-.33-.09-.15-.17.42-.17.56 0 .82.07.58.17zm-48.7.33c-.4.07-1.1.07-1.5 0-.42-.07-.08-.13.75-.13.84 0 1.17.06.75.13zm46.03 0c-.24.09-.67.09-1 0s-.15-.17.42-.17.82.08.58.17zm-49.86.32c-.31.08-.93.09-1.34.02s-.15-.14.59-.15c.73-.02 1.07.04.75.13zm24.1.13c-1.2.14-4.4.32-7.17.42-2.77.09-4.33.1-3.5.01 2.63-.27 9.44-.68 11.17-.68 1.56 0 1.53.02-.5.25zm23.43-.12c-.24.09-.67.09-1 0s-.15-.17.42-.17c.56.01.81.08.58.17zm-50.87.32c-.31.08-.93.09-1.33.02-.41-.07-.15-.14.58-.15.74-.01 1.08.05.75.13zm48.37 0c-.33.09-.83.09-1.17 0-.32-.08-.05-.15.58-.15.64 0 .9.07.59.15zm-51.87.35c-.4.07-1.1.07-1.5 0-.42-.07-.08-.13.75-.13s1.17.06.75.13zm47.61.27c-2.7.47-4.22.59-3.94.31.23-.23 3.84-.73 5.27-.74.64 0 .04.19-1.33.43zm-50.94.06c-.4.07-1.1.07-1.5 0-.42-.07-.08-.13.75-.13s1.16.06.75.13zm20.84 0c-.7.07-1.8.07-2.5 0-.68-.07-.12-.13 1.25-.13s1.94.06 1.25.13zm-23.85.34c-.41.07-1.17.07-1.67 0-.52-.07-.18-.13.75-.13.94-.01 1.34.05.92.13zm18.02 0c-.4.07-1.1.07-1.5 0-.42-.07-.08-.13.75-.13.83-.01 1.16.05.75.13zm-23.1.61c-1.37.23-4.24.51-6.34.61l-3.84.18 4.84-.6c5.87-.74 9.22-.85 5.34-.19zm-3.92 2.39c-.24.09-.67.09-1 0s-.15-.17.42-.17c.56 0 .81.08.58.17zm79.8 2.23c-.33.24-.85.37-1.17.29-.31-.08-2.27.1-4.37.4-2.09.3-5.9.61-8.47.68l-4.67.13 5.17-.48c2.83-.27 6.9-.69 9.01-.93 5.43-.64 5.26-.64 4.5-.09zm-21.52 4.01c0 .33-.98.5-1.16.2-.11-.18.11-.33.48-.33.37-.01.68.06.68.13zm11.93 2.08c-.33.09-.83.09-1.17 0-.32-.08-.05-.15.58-.15.64 0 .91.07.59.15zm-2.67.33c-.33.09-.83.09-1.17 0-.32-.08-.05-.15.58-.15.64 0 .91.07.59.15zm-2.83.35c-.41.07-1.17.07-1.67 0-.51-.07-.18-.13.75-.13s1.33.06.92.13zm-3.84.34c-.5.07-1.33.07-1.83 0s-.08-.13.92-.13c.99-.01 1.41.06.91.13zm7.02 1.29c-.27.26-6.17 1.13-7.7 1.14-2.29.01-1.27-.6 1.37-.82 1.4-.11 2.87-.26 3.24-.31 1.22-.19 3.28-.2 3.09-.01zm-6.27 3.48c-1.53.84-2.1.83-.83-.01.57-.38 1.22-.66 1.5-.65.27.02-.04.32-.67.66z"
        fill={fillColor}
        opacity=".9"
      />
    </svg>
  );
};

export default ArrowIcon;