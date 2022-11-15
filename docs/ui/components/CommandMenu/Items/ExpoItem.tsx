import { BuildIcon, iconSize, theme } from '@expo/styleguide';
import { Command } from 'cmdk';

import type { ExpoItemType } from '../types';
import { openLink } from '../utils';
import { itemStyle } from './styles';

import { CALLOUT } from '~/ui/components/Text';

type Props = {
  item: ExpoItemType;
  onSelect?: () => void;
};

export const ExpoItem = ({ item, onSelect }: Props) => {
  const Icon = item.Icon ?? BuildIcon;
  return (
    <Command.Item
      value={`expo-${item.url}`}
      onSelect={() => {
        openLink(item.url);
        onSelect && onSelect();
      }}>
      <div css={itemStyle}>
        <Icon color={theme.icon.secondary} width={iconSize.regular} />
        <CALLOUT weight="medium">{item.label}</CALLOUT>
      </div>
    </Command.Item>
  );
};
