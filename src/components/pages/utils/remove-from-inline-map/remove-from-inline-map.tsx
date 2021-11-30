import React, { memo } from 'react';

interface IProps {}

const RemoveFromInlineMap = ({}: IProps) => {
  return (
    <div className="ComponentRoot">
      <h1>removeFromInlineMap</h1>
    </div>
  );
};

export default memo(RemoveFromInlineMap);

// import { getIn, setIn } from 'effector-react-form';
// import React, { memo } from 'react';
// import styles from './styles.module.scss';

// interface IProps { };
// let ob = {
//   task: 1,
// }

// const RemoveFromInlineMap = ({ }: IProps) => {
//   React.useEffect(() => {
//     ob = setIn(ob, 'key.val', 'val.key');
//     console.log(ob);
//   }, []);
//   return (
//     <div className="ComponentRoot">
//       <h1>RemoveFromInlineMap</h1>
//       <button onClick={() => console.log(getIn(ob, 'key.val'))}>
//         asd
//       </button>
//     </div>
//   );
// };

// export default memo(RemoveFromInlineMap);
