export function computedValue(scrollTop: any, startPos: any, duration: any, startValue: any, endValue: any) {
  let result = startValue + ((scrollTop - startPos) / duration) * (endValue - startValue);
  return scrollTop < startPos ? startValue : scrollTop > startPos + duration ? endValue : result;
}

export function computedValueWithKeyframe(
  scrollTop: any,
  startPos: any,
  duration: any,
  keyframeObject: any,
  timing: string = 'linear'
) {
  let keyframeValue = Object.keys(keyframeObject).map(key => ({ frame: Number(key), value: keyframeObject[key] }));
  keyframeValue.sort((a, b) => a.frame - b.frame);

  let percent = ((scrollTop - startPos) / duration) * 100;

  if (percent < 0) {
    return keyframeValue[0].value;
  } else if (percent > 100) {
    return keyframeValue[keyframeValue.length - 1].value;
  }

  let result = keyframeValue[0].value;
  for (let i = 0; i < keyframeValue.length - 1; i++) {
    if (keyframeValue[i].frame <= percent && percent <= keyframeValue[i + 1].frame) {
      let frame_a = keyframeValue[i].frame,
        frame_b = keyframeValue[i + 1].frame,
        value_a = keyframeValue[i].value,
        value_b = keyframeValue[i + 1].value;
      result = value_a + EasingFunctions[timing]((percent - frame_a) / (frame_b - frame_a)) * (value_b - value_a);
      break;
    }
  }

  return Math.round(result * 1000) / 1000;
}
export const EasingFunctions: any = {
  // no easing, no acceleration
  linear: (t: number) => t,
  // accelerating from zero velocity
  easeInQuad: (t: number) => t * t,
  // decelerating to zero velocity
  easeOutQuad: (t: number) => t * (2 - t),
  // acceleration until halfway, then deceleration
  easeInOutQuad: (t: number) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t),
  // accelerating from zero velocity
  easeInCubic: (t: number) => t * t * t,
  // decelerating to zero velocity
  easeOutCubic: (t: number) => --t * t * t + 1,
  // acceleration until halfway, then deceleration
  easeInOutCubic: (t: number) => (t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1),
  // accelerating from zero velocity
  easeInQuart: (t: number) => t * t * t * t,
  // decelerating to zero velocity
  easeOutQuart: (t: number) => 1 - --t * t * t * t,
  // acceleration until halfway, then deceleration
  easeInOutQuart: (t: number) => (t < 0.5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t),
  // accelerating from zero velocity
  easeInQuint: (t: number) => t * t * t * t * t,
  // decelerating to zero velocity
  easeOutQuint: (t: number) => 1 + --t * t * t * t * t,
  // acceleration until halfway, then deceleration
  easeInOutQuint: (t: number) => (t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t),
};
