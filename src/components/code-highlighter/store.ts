import { createStore, createEvent } from 'effector';

export const setValue = createEvent<'jsx' | 'tsx'>();

export const langValue = createStore<'jsx' | 'tsx'>('jsx').on(
  setValue,
  (_, value) => value
);
