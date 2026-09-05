export const FilterStatus = {
  All: 'all',
  Active: 'active',
  Completed: 'completed',
} as const;

export type FilterStatusType = (typeof FilterStatus)[keyof typeof FilterStatus];
