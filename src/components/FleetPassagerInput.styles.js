import tw, { styled, css } from "twin.macro";

export const Container = styled.div`
  ${tw`
        flex  border-2 rounded
    `}
`;

export const Button = styled.span`
  ${tw`
        flex items-center justify-center px-4 text-3xl 
    `}
`;
export const Input = styled.input`
  ${tw`
         px-4 py-2 w-full rounded-lg h-10 text-lg    
    `}
`;
export const ResponseContainer = styled.div`
  ${tw`
        flex flex-col ml-14 bg-gray-100 mt-2 p-8 rounded-lg h-32 lg:h-32 overflow-x-auto
    `}

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const DisplaySearchContainer = styled.div`
  ${tw`
         flex flex-row mt-4 items-center
    `}
`;
export const MainContainer = styled.div`
  ${tw`
        flex flex-col mr-10 mt-16
    `}
`;
export const TitleFleet = styled.h2`
  ${tw`
        flex-1 text-sm text-gray-600
    `}
`;
export const ButtonAction = styled.span`
  ${tw`
        flex-none h-6 w-6 text-center text-lg bg-green-700 p-2 rounded-lg  text-white
        transition duration-200 bg-blue-600 rounded-lg hover:bg-blue-700 ease
    `}
  cursor: pointer;
  transition: all 0.2s;
  &:hover {
    transform: scale(1.02);
  }
`;
