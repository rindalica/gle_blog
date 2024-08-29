export function bgColor(category: string) {
  if (category === 'javascript') {
    return 'bg-blue-100';
  }
  if (category === 'html/css') {
    return 'bg-pink-100';
  }
  // return randomBrightColor();
  // return 'bg-[#50d71e]';
  return 'bg-white';
}
