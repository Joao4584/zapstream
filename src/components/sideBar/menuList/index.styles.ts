import tw from "tailwind-styled-components"

interface LiItemProps {
    active: boolean
 }
 
export const LiItem = tw.li<LiItemProps>`

    items-center 
    cursor-pointer
    dark:hover:bg-slate-500 
    dark:hover:bg-opacity-20 
    rounded-sm 
    dark:rounded-sm 
    dark:hover:text-slate-200
    text-sm  
    relative  
    
    ${(p) => (p.active ? `
    text-black
    dark:text-slate-200
` : `

    dark:text-slate-300
`)}
`;

export const UlItems = tw.ul`

`;
export const MenuDiv = tw.div`mt-4`;

export const SpanLi = tw.span`mr-3`;

export const SpanActive = tw.span`
    absolute
    left-0
    bg-green-700
    w-1.5
    top-1/2
    -translate-y-1/2
    h-4/5
    rounded-br-xl
    rounded-tr-xl
`;