export const deleteInType = `{
  state: object;
  path: string | string[];
  removeEmpty = boolean;
  inDeep: boolean;
};`;

export const removeEmptyExample = `const info = {
  user: {
    name: 'Sergei',
  },
  serverId: 1,
}

deleteIn(info, 'user.name', true) => { serverId: 1, }`;

export const removeEmpty2ndExample = `const info = {
  user: {
    name: 'Sergei',
    lastName: 'Sergeev',
  },
  serverId: 1,
}

deleteIn(info, 'user.name', true) => 
{
  user: {
    lastName: 'Sergeev',
  },
  serverId: 1,
}`;

export const removeEmpty3rdExample = `const info = {
  user: {
    name: 'Sergei',
  },
  serverId: 1,
}

deleteIn(info, 'user.name', false) => { user: {}, serverId: 1, }`;
