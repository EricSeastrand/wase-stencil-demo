import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'wase-person',
  shadow: true
})
export class WasePerson {
  @Prop() name: string;
  @Prop() email: string;
  @Prop() phone: string;

  render() {
    const phoneHref = `tel:${this.phone}`;
    const emailHref = `mailto:${this.email}`;
    
    return  [
        <h4>{this.name}</h4>,
        <a href={phoneHref}>{ this.phone }</a>,
        <a href={emailHref}>{ this.email }</a>
    ];
  }
}
