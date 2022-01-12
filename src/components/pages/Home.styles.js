import tw, { styled } from "twin.macro";

export const Container = styled.div`
  ${tw`
        mx-10 my-10 min-h-screen  grid gap-10 sm:grid-cols-1 md:grid-cols-2 bg-white
        relative md:fixed  inset-0 mb-10 
    `}
`;

export const LeftSideContainer = styled.div`
  ${tw`
        flex-auto w-full px-10 flex-col sm:px-0
    `}
`;

export const RightSideContainer = styled.div`
  ${tw`
        flex-auto  rounded-2xl  shadow-2xl h-3/4  border-2  p-10  flex-col bg-white 
    `}
`;

export const MainTitle = styled.h1`
  ${tw`
        text-3xl font-bold  antialiased
    `}
`;
