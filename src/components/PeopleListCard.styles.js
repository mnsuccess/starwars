import tw, { styled } from "twin.macro";

export const Container = styled.div`
  ${tw`
       overflow-y-auto h-1/2 w-full mt-8
    `}
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const CardContainer = styled.div`
  ${tw`
      flex flex-row items-start p-4 justify-between text-gray-900  rounded-lg gap-0 bg-gray-50 transition-all duration-200 mt-6 mb-6 
    `}

  transition: all 0.2s;
  &:hover {
    transform: scale(1.02);
  }
`;

export const Icon = styled.div`
  ${tw`
       flex flex-none items-center justify-center w-12 h-12 leading-7 bg-gray-600  rounded-full  mr-4 
    `}
  cursor: pointer;
`;

export const InfoContainer = styled.div`
  ${tw`
       flex-1 leading-7 border-0 border-gray-200
    `}
`;

export const InfoName = styled.h3`
  ${tw`
        m-0 text-lg font-semibold leading-tight tracking-tight text-black  sm:text-xl md:text-2xl
    `}
`;

export const InfoEntity = styled.h3`
  ${tw`
        mt-1 text-base leading-normal text-gray-900 
    `}
`;
