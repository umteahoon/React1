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


// // 논리 연산자 AND(&&) 사용하기 
// export default function Items({ name, isPacked }) {
//   return (
//     <li>
//       {name} {isPacked && "✅"}
//     </li>
//   );
// }


// Step9 조건부로 JSX를 변수에 할당한 후에 렌더링 합니다.
export default function Items({ name, isPacked }) {
  let itemContent = name;

  if (isPacked) {
    itemContent = (
      <del>
        {name + " ✅"}
      </del>
    );
  }

  return (
    <li>
      {itemContent}
    </li>
  );
}

// export default function Items({ name, isPacked }) {
//   let itemContent = <li>{name}</li>;

//   if (isPacked) {
//     itemContent = (
//       <li>
//         <del>{name + " ✅"}</del>
//       </li>
//     );
//   }

//   return (
//     itemContent
//   );
// }