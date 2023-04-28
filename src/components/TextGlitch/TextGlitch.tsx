import styled from "@emotion/styled";
import React from "react";

type TextGlitchProps = {
  text: string;
  wrapperStyles?: any;
  textStyles?: any;
  letter?: boolean;
  as?: string;
};

const TextGlitch = styled(UnstyledTextGlitch)`
  background-color: red;
  color: red;

  @keyframes glitch-anim {
    0% {
      clip: rect(40px, 9999px, 35px, 0);
    }
    5% {
      clip: rect(11px, 9999px, 5px, 0);
    }
    10% {
      clip: rect(63px, 9999px, 14px, 0);
    }
    15% {
      clip: rect(60px, 9999px, 8px, 0);
    }
    20% {
      clip: rect(79px, 9999px, 68px, 0);
    }
    25% {
      clip: rect(4px, 9999px, 52px, 0);
    }
    30% {
      clip: rect(3px, 9999px, 37px, 0);
    }
    35% {
      clip: rect(14px, 9999px, 29px, 0);
    }
    40% {
      clip: rect(87px, 9999px, 89px, 0);
    }
    45% {
      clip: rect(13px, 9999px, 37px, 0);
    }
    50% {
      clip: rect(96px, 9999px, 74px, 0);
    }
    55% {
      clip: rect(50px, 9999px, 4px, 0);
    }
    60% {
      clip: rect(32px, 9999px, 4px, 0);
    }
    65% {
      clip: rect(33px, 9999px, 52px, 0);
    }
    70% {
      clip: rect(68px, 9999px, 25px, 0);
    }
    75% {
      clip: rect(44px, 9999px, 83px, 0);
    }
    80% {
      clip: rect(88px, 9999px, 32px, 0);
    }
    85% {
      clip: rect(81px, 9999px, 38px, 0);
    }
    90% {
      clip: rect(48px, 9999px, 39px, 0);
    }
    95% {
      clip: rect(19px, 9999px, 94px, 0);
    }
    100% {
      clip: rect(48px, 9999px, 30px, 0);
    }
  }

  .glitch-wrapper {
    display: inline-block;
    position: relative;
  }

  .glitch,
  .glitch-letter {
    display: inline-block;
  }

  .glitch:before,
  .glitch-letter:hover:before {
    content: attr(data-text);
    position: absolute;
    text-shadow: 1px 0 #f1f1f1;
    left: -1px;
    overflow: hidden;
    clip: rect(0, 900px, 0, 0);
    animation: glitch-anim 2s infinite ease-in-out alternate-reverse;
  }
`;

const GlitchSpan = styled.span`
  display: inline-block;

  :before {
    content: attr(data-text);
    position: absolute;
    text-shadow: 1px 0 #e51919;
    padding: 0.5px;
    overflow: hidden;
    clip: rect(0, 900px, 0, 0);
    animation: glitch-anim 2s infinite ease-in-out alternate-reverse;
  }
`;

function UnstyledTextGlitch({
  text,
  wrapperStyles = {},
  textStyles = {},
  letter = false,
  as = "p",
}: TextGlitchProps): JSX.Element {
  if (!letter) {
    return (
      <span className="glitch-wrapper" style={wrapperStyles}>
        <GlitchSpan
          className="glitch"
          style={textStyles}
          data-text={text}
          role={as}
        >
          {text}
        </GlitchSpan>
      </span>
    );
  }

  const letters = text.split("");

  return (
    <div className="glitch-wrapper" style={wrapperStyles} role={as}>
      {letters.map((l: string, index: number) =>
        l === " " ? (
          <span className="glitch-letter" style={textStyles} key={index}>
            &nbsp;
          </span>
        ) : (
          <div className="glitch-wrapper" key={index}>
            <span className="glitch-letter" style={textStyles} data-text={l}>
              {l}
            </span>
          </div>
        )
      )}
    </div>
  );
}

export default TextGlitch;
