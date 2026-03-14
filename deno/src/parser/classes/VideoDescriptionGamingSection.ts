import { YTNode, type ObservedArray } from '../helpers.ts';
import { Parser, type RawNode } from '../index.ts';
import { Text } from '../misc.ts';
import CarouselLockup from './CarouselLockup.ts';

export default class VideoDescriptionGamingSection extends YTNode {
  static type = 'VideoDescriptionGamingSection';

  section_title: Text;
  carousel_lockups: ObservedArray<CarouselLockup>;

  constructor(data: RawNode) {
    super();
    this.section_title = new Text(data.sectionTitle);
    this.carousel_lockups = Parser.parseArray(data.carouselLockups, CarouselLockup);
  }
}
