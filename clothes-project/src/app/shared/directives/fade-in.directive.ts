import { animate, AnimationBuilder, AnimationMetadata, AnimationPlayer, style } from '@angular/animations';
import { ElementSchemaRegistry } from '@angular/compiler';
import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[appFadeIn]'
})
export class FadeInDirective {
  player: AnimationPlayer;
  previousDataChanges: string;

  constructor(private builder: AnimationBuilder, private element: ElementSchemaRegistry) {}

  @Input('appFadeIn') set show(dataChanges: string) {
    if (this.player) {
      this.player.destroy();
    }
    const metadata = dataChanges !== this.previousDataChanges && this.fadeIn()
    const factory = this.builder.build(metadata);
    this.player = factory.create(this.element);
    this.player.play();
  }

  private fadeIn(): AnimationMetadata[] {
    return [
      style({ opacity: 0 }),
      animate('150ms', style({ opacity: '0.3' })),
      style({ opacity: 0.6 }),
      animate('150ms', style({ opacity: '1' }))
    ];
  }

}
