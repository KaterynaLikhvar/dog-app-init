// import { Box } from '@mui/material';
// import { FC } from 'react';

// interface BreedInfoProps {
//   weight: string;
//   height: string;
//   lifeSpan: string;
//   origin: string;
//   temperament: string;
// }

// const createBreedInfoArray = (
//   props: BreedInfoProps
// ): { [key: string]: string }[] => {
//   return [
//     { 'Weight Range': props.weight },
//     { Height: props.height },
//     { 'Life span': props.lifeSpan },
//     { Origin: props.origin },
//     { Temperament: props.temperament }
//   ];
// };

// export const BreedInfo: FC<BreedInfoProps> = props => {
//   const breedInfoArray = createBreedInfoArray(props);

//   return (
//     <Box>
//       {breedInfoArray.map((item, index) => (
//         <div key={index}>
//           {Object.entries(item).map(([key, value]) => (
//             <span key={key}>
//               <strong>{key}:</strong> {value}
//             </span>
//           ))}
//         </div>
//       ))}
//     </Box>
//   );
// };
