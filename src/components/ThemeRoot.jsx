'use client';

import { Theme } from '@radix-ui/themes';

export default function ThemeRoot({ children }) {
  return (
    <Theme accentColor="amber" grayColor="sand" radius="medium">
      {children}
    </Theme>
  );
}
