import { Parser } from '../../index.ts';
import { YTNode } from '../../helpers.ts';
import type { RawNode } from '../../index.ts';

import Button from '../Button.ts';
import ButtonView from '../ButtonView.ts';
import ListItemView from '../ListItemView.ts';
import MenuServiceItem from './MenuServiceItem.ts';
import DownloadButton from '../DownloadButton.ts';
import MenuServiceItemDownload from './MenuServiceItemDownload.ts';

export default class MenuFlexibleItem extends YTNode {
  static type = 'MenuFlexibleItem';

  public menu_item: MenuServiceItem | MenuServiceItemDownload | ListItemView | null;
  public top_level_button: DownloadButton | ButtonView | Button | null;

  constructor(data: RawNode) {
    super();
    this.menu_item = Parser.parseItem(data.menuItem, [ MenuServiceItem, MenuServiceItemDownload, ListItemView ]);
    this.top_level_button = Parser.parseItem(data.topLevelButton, [ DownloadButton, ButtonView, Button ]);
  }
}