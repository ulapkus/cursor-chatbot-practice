export default function DevilAdvocateIcon({
  className = "w-16 h-16",
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Outer glow circle */}
      <circle cx="50" cy="50" r="48" fill="url(#glow)" opacity="0.2" />

      {/* Main chat bubble */}
      <path
        d="M25 30C25 25.5817 28.5817 22 33 22H67C71.4183 22 75 25.5817 75 30V52C75 56.4183 71.4183 60 67 60H45L35 70V60H33C28.5817 60 25 56.4183 25 52V30Z"
        fill="url(#gradient1)"
        stroke="url(#gradient2)"
        strokeWidth="2"
      />

      {/* Debate symbols - opposing arrows */}
      <g>
        {/* Left arrow pointing right */}
        <path
          d="M35 38L42 41L35 44"
          stroke="#22d3ee"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <line
          x1="32"
          y1="41"
          x2="42"
          y2="41"
          stroke="#22d3ee"
          strokeWidth="2.5"
          strokeLinecap="round"
        />

        {/* Right arrow pointing left */}
        <path
          d="M65 38L58 41L65 44"
          stroke="#a855f7"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <line
          x1="68"
          y1="41"
          x2="58"
          y2="41"
          stroke="#a855f7"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </g>

      {/* Central spark/clash symbol */}
      <circle cx="50" cy="41" r="3" fill="#fbbf24" />
      <g opacity="0.8">
        <line
          x1="50"
          y1="35"
          x2="50"
          y2="38"
          stroke="#fbbf24"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <line
          x1="50"
          y1="44"
          x2="50"
          y2="47"
          stroke="#fbbf24"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <line
          x1="44"
          y1="41"
          x2="47"
          y2="41"
          stroke="#fbbf24"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <line
          x1="53"
          y1="41"
          x2="56"
          y2="41"
          stroke="#fbbf24"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </g>

      {/* Bottom text quote marks */}
      <g opacity="0.6">
        <path
          d="M38 52C38 52 40 50 40 48C40 46 38 46 38 46"
          stroke="url(#gradient3)"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M62 52C62 52 60 50 60 48C60 46 62 46 62 46"
          stroke="url(#gradient3)"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </g>

      {/* Gradients */}
      <defs>
        <linearGradient
          id="gradient1"
          x1="25"
          y1="22"
          x2="75"
          y2="70"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.2" />
        </linearGradient>

        <linearGradient
          id="gradient2"
          x1="25"
          y1="22"
          x2="75"
          y2="70"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#8b5cf6" />
          <stop offset="100%" stopColor="#06b6d4" />
        </linearGradient>

        <linearGradient
          id="gradient3"
          x1="38"
          y1="46"
          x2="62"
          y2="52"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#8b5cf6" />
          <stop offset="100%" stopColor="#22d3ee" />
        </linearGradient>

        <radialGradient id="glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#8b5cf6" />
          <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
        </radialGradient>
      </defs>
    </svg>
  );
}
