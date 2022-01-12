import tw, { styled, css } from "twin.macro";

/**
 * Styled Components for ProgressBar Componenet(Widgets)
 */
export const Container = styled.div`
  ${tw`
        w-full bg-gray-200 h-6 mb-6  rounded-md 
    `}
`;

export const Header = styled.div(({ width, color }) => [
  tw`
       h-6 rounded-md  items-center text-white  w-full
    `,
  css`
    width: ${width}%;
    background-color: ${color};
  `,
]);

export const Text = styled.div`
  ${tw`
         w-64  text-center
    `}
`;
