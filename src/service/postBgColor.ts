export function bgColor(category: string) {
  if (category === 'javascript') {
    return '#DBE9FE';
  }
  if (category === 'html/css') {
    return '#FBE7F3';
  }
  // return randomBrightColor();
  // return 'bg-[#50d71e]';
  return 'bg-white';
}
