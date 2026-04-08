// export default function Items({ name, isPacked }) {
//   if (isPacked) {
//     return <li>{name} ✅</li>;
//   }
//   return <li>{name}</li>;
// }

//  Step 7: Items.jsx
// export default function Items({ name, isPacked }) {
//   return <li>{name} {isPacked ? "✅" : ""}</li>;
// }

// Step 8: Items.jsx
// export default function Items({ name, isPacked }) {
//   return (
//     <li>
//       {isPacked ? (
//         <del>
//           {name + " ✅"}
//         </del>
//       ) : (
//         name
//       )}
//     </li>
//   )
// }


// 논리 연산자 AND(&&) 사용하기 
export default function Items({ name, isPacked }) {
  return (
    <li>
      {name} {isPacked && "✅"}
    </li>
  );
}