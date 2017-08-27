import { Component, Input } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';


// Slide UP
export const slideUp = trigger('slideUp', [
  state('in',   style({
    height: 'auto',
  })),
  state('out',   style({
    height: 0,
    overflow: 'hidden',
    paddingTop: 0,
    paddingBottom: 0,
  })),
  transition('* => out', animate('400ms ease-in-out'))
]);

// Slide LEFT
export const slideLeft = trigger('slideLeft', [
  state('in', style({
    left: 0,
    opacity: 1
  })),
  state('out', style({
    left: '-50%',
    opacity: 0
  })),
  transition('in => out', animate('.0s')),
  transition('out => in', animate('.4s ease-out')),
]);


// FadeIn
export const FadeIn = trigger('FadeIn', [
  state('in', style({
    opacity: 1
  })),
  state('out', style({
    opacity: 0
  })),
  transition('in <=> out', animate('.2s ease-out')),
]);
