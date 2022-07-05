export type Font = "NotoSans"

export const toFontName = (font: Font): string => {
  if (font == "NotoSans") {
    return "Noto Sans JP, sans-serif"
  }
  return ""
}