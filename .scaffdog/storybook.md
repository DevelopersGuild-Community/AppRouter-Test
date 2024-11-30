---
name: 'storybook'
root: '.'
output: '**/*'
ignore: []
questions:
  name: 'コンポーネント名を入力してください'
---

# `{{ inputs.name | pascal }}/{{ inputs.name | pascal }}.story.tsx`

```typescript
{{ read "./partials/ui-story.txt" }}
```
