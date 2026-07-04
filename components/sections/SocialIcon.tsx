type SocialIconProps = {
  name: string;
};

export function SocialIcon({ name }: SocialIconProps) {
  if (name === "linkedin") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
        <path d="M5 9h3.2v10H5V9Zm1.6-4a1.8 1.8 0 1 1 0 3.6 1.8 1.8 0 0 1 0-3.6ZM10 9h3v1.4h.1c.4-.8 1.5-1.7 3.1-1.7 3.3 0 3.9 2.2 3.9 5V19h-3.2v-4.7c0-1.1 0-2.6-1.6-2.6s-1.9 1.2-1.9 2.5V19H10V9Z" fill="currentColor" />
      </svg>
    );
  }

  if (name === "pinterest") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
        <path d="M12.2 3.5a8.3 8.3 0 0 0-3 16c-.1-.7-.1-1.8 0-2.5l1-4.1s-.3-.6-.3-1.5c0-1.4.8-2.4 1.8-2.4.9 0 1.3.6 1.3 1.4 0 .9-.6 2.2-.9 3.4-.2 1 .5 1.8 1.5 1.8 1.8 0 3.2-1.9 3.2-4.7 0-2.4-1.7-4.1-4.2-4.1-2.9 0-4.6 2.2-4.6 4.4 0 .9.3 1.8.8 2.3.1.1.1.2.1.3l-.3 1.1c0 .2-.2.3-.4.2-1.3-.6-2.1-2.4-2.1-3.9 0-3.2 2.3-6.1 6.7-6.1 3.5 0 6.2 2.5 6.2 5.8 0 3.5-2.2 6.3-5.3 6.3-1 0-2-.5-2.3-1.1l-.6 2.4c-.2.8-.8 1.9-1.2 2.5.9.3 1.8.5 2.8.5a8.3 8.3 0 0 0 0-16.6Z" fill="currentColor" />
      </svg>
    );
  }

  if (name === "tiktok") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
        <path d="M14.2 3h3.1c.2 1.5 1 3 3 3.8v3.1a7.2 7.2 0 0 1-3-.7v5.7A5.1 5.1 0 1 1 12 9.8v3.3a2 2 0 1 0 1.7 2V3Z" fill="currentColor" />
      </svg>
    );
  }

  if (name === "x") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
        <path d="M4 4h4.6l4.1 5.5L17.4 4H20l-6.1 7.1L20.5 20h-4.6l-4.6-6.2L6 20H3.5l6.6-7.7L4 4Zm3.3 1.9 9.5 12.2h1.4L8.7 5.9H7.3Z" fill="currentColor" />
      </svg>
    );
  }

  if (name === "youtube") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
        <path d="M21 8.1a3 3 0 0 0-2.1-2.2C17 5.4 12 5.4 12 5.4s-5 0-6.9.5A3 3 0 0 0 3 8.1a31.5 31.5 0 0 0 0 7.8 3 3 0 0 0 2.1 2.2c1.9.5 6.9.5 6.9.5s5 0 6.9-.5a3 3 0 0 0 2.1-2.2 31.5 31.5 0 0 0 0-7.8ZM10 15.5v-7l6 3.5-6 3.5Z" fill="currentColor" />
      </svg>
    );
  }

  if (name === "facebook") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
        <path d="M14 8h2.5V4.2c-.4-.1-1.9-.2-3.5-.2-3.5 0-5.8 2.1-5.8 6v3.3H3.5v4.3h3.7V24h4.5v-6.4h3.6l.6-4.3h-4.2v-2.9c0-1.2.3-2.4 2.3-2.4Z" fill="currentColor" />
      </svg>
    );
  }

  if (name === "instagram") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
        <rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" />
      </svg>
    );
  }

  if (name === "whatsapp") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
        <path
          d="M5.1 18.9 6.2 15A7.7 7.7 0 1 1 9 17.8l-3.9 1.1Z"
          fill="none"
          stroke="currentColor"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path
          d="M9.4 8.7c.2-.4.4-.4.7-.4h.5c.2 0 .4.1.5.4l.6 1.4c.1.2.1.4 0 .6l-.4.5c-.1.2-.2.4 0 .6.5.9 1.2 1.6 2.1 2.1.2.1.4.1.6 0l.6-.5c.2-.1.4-.1.6 0l1.3.6c.3.1.4.3.4.6v.5c0 .3-.1.5-.4.7-.5.4-1.2.5-1.8.4-2.8-.5-5.1-2.7-5.8-5.5-.2-.7-.1-1.4.3-2Z"
          fill="currentColor"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
      <path
        d="M12 21s7-5.4 7-12a7 7 0 1 0-14 0c0 6.6 7 12 7 12Z"
        fill="none"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <circle cx="12" cy="9" r="2.5" fill="currentColor" />
    </svg>
  );
}
