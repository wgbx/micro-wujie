import presetRemToPx from '@unocss/preset-rem-to-px'
import { defineConfig, presetAttributify, presetUno, transformerDirectives, transformerVariantGroup } from 'unocss'

export default defineConfig({
  presets: [presetAttributify(), presetUno(), presetRemToPx({ baseFontSize: 4 })],
  transformers: [transformerDirectives(), transformerVariantGroup()],
  theme: {},
  rules: [
    [/^c-(\d)$/, ([, d]) => ({ color: `#${d}${d}${d}` })],
    [/^bt-(\w+)$/, ([, w]) => ({ 'border-top': `1px solid #${w}` })],
    [/^bb-(\w+)$/, ([, w]) => ({ 'border-bottom': `1px solid #${w}` })],
    [/^p-(\d+)-(\d+)/, ([, d, s]) => ({ padding: `${d}px ${s}px` })],
    [/^m-(\d+)-(\d+)/, ([, d, s]) => ({ margin: `${d}px ${s}px` })]
  ],
  shortcuts: {
    'flex-center': 'flex items-center justify-center'
  }
})
