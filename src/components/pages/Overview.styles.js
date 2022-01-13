import tw, { styled } from "twin.macro";

export const Container = styled.div`
  ${tw`
        mx-10 my-10 min-h-screen  grid gap-10 sm:grid-cols-1 md:grid-cols-2 bg-white
        relative md:fixed  inset-0 mb-11 
    `}
`;

export const LeftSideContainer = styled.div`
  ${tw`
        flex-1 
    `}
`;

export const RightSideContainer = styled.div`
  ${tw`
        flex-none flex flex-col mt-10 bg-white  rounded-lg p-8 
    `}
`;

export const DetailShipInfo = styled.div`
  ${tw`
        mt-10 bg-white shadow shadow-xl p-10 rounded-lg bg-gray-100 
    `}
`;

export const DetailShipInfoGrid = styled.div`
  ${tw`
        grid grid-cols-2 gap-y-0 mt-0
    `}
`;

export const addCrewBoxContainer = styled.div`
  ${tw`
        w-full bg-gray-900 rounded-md mt-16 
    `}
`;

export const Button = styled.button`
  ${tw`
        bg-red-600 w-32 h-8 text-white hover:bg-red-800 shadow shadow-sm mt-10
    `}

  cursor:pointer
`;
export const MainTitle = styled.h1`
  ${tw`
        text-3xl font-bold  antialiased
    `}
`;
