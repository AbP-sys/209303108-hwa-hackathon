"use client";

import { motion } from "framer-motion";

interface AmigoSVGProps {
  size?: "lg" | "sm";
  interactive?: boolean;
}

export function AmigoSVG({
  size = "lg",
  interactive = false,
}: AmigoSVGProps) {
  const isSmall = size === "sm";
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
      className={[
        "relative flex items-center justify-center overflow-hidden",
        isSmall ? "w-64 h-64" : "w-full max-w-[320px] h-auto",
      ].join(" ")}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 800 800"
        role="img"
        aria-labelledby="title desc"
        className={[
          isSmall ? "w-full h-full" : "w-full max-w-[320px] h-auto",
          "drop-shadow-[0_0_20px_rgba(34,211,238,0.3)]",
        ].join(" ")}
      >
        <title id="title">Amigo — Your Pet Companion</title>
        <desc id="desc">
          A friendly white and mint robotic pet with glowing blue eyes, rosy cheeks, an antenna, and little wheels.
        </desc>
        <defs>
          <linearGradient id="shell" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#fff" />
            <stop offset=".58" stopColor="#f4f7f6" />
            <stop offset="1" stopColor="#dce6e4" />
          </linearGradient>
          <linearGradient id="mint" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#d8f5f0" />
            <stop offset="1" stopColor="#8fcac5" />
          </linearGradient>
          <linearGradient id="wheel" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#c7d0d2" />
            <stop offset=".55" stopColor="#879499" />
            <stop offset="1" stopColor="#59676d" />
          </linearGradient>
          <linearGradient id="screen" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#202630" />
            <stop offset="1" stopColor="#080d16" />
          </linearGradient>
          <linearGradient id="blue" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#b8f4ff" />
            <stop offset="1" stopColor="#4b9eff" />
          </linearGradient>
          <filter id="softGlow" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation={8} result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="shadow" x="-30%" y="-30%" width="160%" height="180%">
            <feGaussianBlur stdDeviation={13} />
          </filter>
        </defs>
        <style>{`
          .amigo {
            transform-box: fill-box;
            transform-origin: 50% 90%;
            animation: amigo-float 3.8s ease-in-out infinite;
          }
          .antenna-tip {
            transform-box: fill-box;
            transform-origin: 50% 50%;
            animation: tip-glow 2.2s ease-in-out infinite;
          }
          .eye {
            transform-box: fill-box;
            transform-origin: center;
            animation: blink 5.2s infinite;
          }
          .eye.right {
            animation-delay: 0.08s;
          }
          .cheek {
            animation: blush 2.8s ease-in-out infinite;
            transform-box: fill-box;
            transform-origin: center;
          }
          .chest-light {
            animation: chest-pulse 1.8s ease-in-out infinite;
          }
          .ear-ring {
            animation: ring-pulse 2.6s ease-in-out infinite;
          }
          @keyframes amigo-float {
            0%,
            100% {
              transform: translateY(0) rotate(0deg);
            }
            50% {
              transform: translateY(-9px) rotate(-0.5deg);
            }
          }
          @keyframes blink {
            0%,
            42%,
            46%,
            100% {
              transform: scaleY(1);
            }
            44% {
              transform: scaleY(0.08);
            }
          }
          @keyframes tip-glow {
            0%,
            100% {
              opacity: 0.75;
              filter: none;
            }
            50% {
              opacity: 1;
              filter: drop-shadow(0 0 12px #8deaff);
            }
          }
          @keyframes blush {
            0%,
            100% {
              opacity: 0.65;
            }
            50% {
              opacity: 1;
            }
          }
          @keyframes chest-pulse {
            0%,
            100% {
              opacity: 0.65;
            }
            50% {
              opacity: 1;
            }
          }
          @keyframes ring-pulse {
            0%,
            100% {
              opacity: 0.7;
            }
            50% {
              opacity: 1;
            }
          }
          @media (prefers-reduced-motion: reduce) {
            .amigo,
            .antenna-tip,
            .eye,
            .cheek,
            .chest-light,
            .ear-ring {
              animation: none !important;
            }
          }
        `}</style>
        <ellipse
          cx="405"
          cy="704"
          rx="260"
          ry="35"
          fill="#50646a"
          opacity={0.16}
          filter="url(#shadow)"
        />
        <g className="amigo">
          <path
            d="M535 202 L579 86"
            fill="none"
            stroke="#85bdb9"
            strokeWidth={19}
            strokeLinecap="round"
          />
          <path
            d="M540 196 L581 91"
            fill="none"
            stroke="#d5f1ec"
            strokeWidth={6}
            strokeLinecap="round"
            opacity={0.75}
          />
          <circle
            className="antenna-tip"
            cx="588"
            cy="72"
            r="28"
            fill="url(#blue)"
            filter="url(#softGlow)"
          />
          <circle cx="578" cy="62" r="8" fill="#fff" opacity={0.45} />
          <path
            d="M195 421 Q143 461 160 542 Q171 590 211 603 L244 555 L236 448Z"
            fill="url(#mint)"
            stroke="#b9d8d5"
            strokeWidth={5}
          />
          <path
            d="M646 423 Q706 456 691 531 Q682 575 646 595 L617 552 L621 452Z"
            fill="url(#mint)"
            stroke="#b9d8d5"
            strokeWidth={5}
          />
          <ellipse
            cx="220"
            cy="624"
            rx={69}
            ry={116}
            transform="rotate(10 220 624)"
            fill="url(#wheel)"
            stroke="#e8eeee"
            strokeWidth={8}
          />
          <ellipse
            cx="225"
            cy="625"
            rx={39}
            ry={83}
            transform="rotate(10 225 625)"
            fill="#b9d0ce"
          />
          <ellipse
            cx="610"
            cy="625"
            rx={69}
            ry={116}
            transform="rotate(-10 610 625)"
            fill="url(#wheel)"
            stroke="#e8eeee"
            strokeWidth={8}
          />
          <ellipse
            cx="605"
            cy="625"
            rx={39}
            ry={83}
            transform="rotate(-10 605 625)"
            fill="#b9d0ce"
          />
          <path
            d="M255 411 Q262 376 310 370 L514 370 Q565 379 583 421 L640 608 Q654 657 608 675 Q429 724 232 675 Q190 661 205 610Z"
            fill="url(#shell)"
            stroke="#d7e0df"
            strokeWidth={7}
          />
          <path
            d="M270 443 Q291 409 324 410 L505 410 Q544 412 559 449 L585 585 Q589 619 557 635 Q402 676 257 633 Q225 622 233 585Z"
            fill="#f9fbfa"
            opacity={0.65}
          />
          <path
            d="M276 655 Q406 686 548 653"
            fill="none"
            stroke="#b5d5d1"
            strokeWidth={12}
            strokeLinecap="round"
            opacity={0.7}
          />
          <path
            d="M220 465 Q235 428 269 432 L293 455 L274 615 Q249 640 222 616 Q197 592 205 535Z"
            fill="url(#mint)"
            stroke="#d4e2e0"
            strokeWidth={6}
          />
          <path
            d="M565 455 Q587 426 619 441 Q654 461 654 527 L638 605 Q620 638 591 615 L566 470Z"
            fill="url(#mint)"
            stroke="#d4e2e0"
            strokeWidth={6}
          />
          <path
            d="M250 390 Q400 431 551 390 L565 423 Q403 478 237 422Z"
            fill="#dce5e3"
            stroke="#c4d1cf"
            strokeWidth={5}
          />
          <path
            d="M205 216 Q219 132 315 119 Q410 91 548 128 Q642 154 654 246 L667 365 Q670 420 618 443 Q405 499 189 438 Q142 421 151 359Z"
            fill="url(#shell)"
            stroke="#d9e2e0"
            strokeWidth={8}
          />
          <path
            d="M220 213 Q247 148 326 140 Q430 111 542 148"
            fill="none"
            stroke="#fff"
            strokeWidth={10}
            strokeLinecap="round"
            opacity={0.9}
          />
          <ellipse
            cx="190"
            cy="339"
            rx={42}
            ry={70}
            fill="url(#mint)"
            stroke="#d7e5e2"
            strokeWidth={7}
          />
          <ellipse
            cx="190"
            cy="339"
            rx={23}
            ry={47}
            fill="#b5dcd7"
            opacity={0.8}
          />
          <ellipse
            cx="634"
            cy="339"
            rx={49}
            ry={72}
            fill="url(#mint)"
            stroke="#d7e5e2"
            strokeWidth={7}
          />
          <ellipse
            cx="640"
            cy="339"
            rx={31}
            ry={51}
            fill="none"
            stroke="#e7ffff"
            strokeWidth={7}
            className="ear-ring"
            filter="url(#softGlow)"
          />
          <ellipse cx="640" cy="339" rx={19} ry={36} fill="#a7d6d2" opacity={0.6} />
          <path
            d="M237 216 Q251 171 311 166 Q415 143 529 168 Q603 185 614 244 L627 350 Q631 397 587 411 Q404 454 221 410 Q180 398 187 350Z"
            fill="url(#screen)"
            stroke="#aeb9bb"
            strokeWidth={9}
          />
          <path
            d="M224 220 Q247 184 296 179"
            fill="none"
            stroke="#fff"
            strokeWidth={5}
            opacity={0.22}
            strokeLinecap="round"
          />
          <path
            d="M588 211 Q613 239 613 282"
            fill="none"
            stroke="#fff"
            strokeWidth={8}
            opacity={0.16}
            strokeLinecap="round"
          />
          <g filter="url(#softGlow)">
            <path
              className="eye"
              d="M245 317 Q258 260 302 260 Q348 260 359 317"
              fill="none"
              stroke="url(#blue)"
              strokeWidth={23}
              strokeLinecap="round"
            />
            <path
              className="eye right"
              d="M445 317 Q458 263 504 263 Q550 263 563 317"
              fill="none"
              stroke="url(#blue)"
              strokeWidth={23}
              strokeLinecap="round"
            />
          </g>
          <path
            d="M367 344 Q400 337 434 345 Q433 375 401 383 Q370 376 367 344Z"
            fill="url(#blue)"
            filter="url(#softGlow)"
          />
          <path
            d="M378 349 Q401 354 424 349"
            fill="none"
            stroke="#e8fbff"
            strokeWidth={4}
            opacity={0.7}
          />
          <g className="cheek" fill="#f6a9d2" opacity={0.9}>
            <path
              d="M237 340 l-8 14 M256 343 l-8 15 M275 345 l-8 15"
              stroke="#f6a9d2"
              strokeWidth={9}
              strokeLinecap="round"
            />
            <path
              d="M536 345 l-8 15 M555 343 l-8 15 M574 340 l-8 14"
              stroke="#f6a9d2"
              strokeWidth={9}
              strokeLinecap="round"
            />
          </g>
          <g fill="#83bcb9" transform="translate(400 541)">
            <ellipse cx="0" cy="14" rx={23} ry={19} />
            <ellipse
              cx="-24"
              cy="-12"
              rx={9}
              ry={13}
              transform="rotate(-25 -24 -12)"
            />
            <ellipse
              cx="-8"
              cy="-27"
              rx={9}
              ry={13}
              transform="rotate(-8 -8 -27)"
            />
            <ellipse
              cx="11"
              cy="-27"
              rx={9}
              ry={13}
              transform="rotate(8 11 -27)"
            />
            <ellipse
              cx="27"
              cy="-11"
              rx={9}
              ry={13}
              transform="rotate(25 27 -11)"
            />
          </g>
          <rect
            x="347"
            y="598"
            width={106}
            height={17}
            rx={8.5}
            fill="#b5e9ff"
            opacity={0.45}
            filter="url(#softGlow)"
          />
          <rect
            className="chest-light"
            x="350"
            y="600"
            width={100}
            height={12}
            rx={6}
            fill="url(#blue)"
            stroke="#c9f4ff"
            strokeWidth={2}
          />
          <path
            d="M364 603 H432"
            stroke="#fff"
            strokeWidth={2}
            strokeLinecap="round"
            opacity={0.8}
          />
        </g>
      </svg>
    </motion.div>
  );
}
