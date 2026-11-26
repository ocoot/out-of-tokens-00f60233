# Out of Tokens, Mid-Sentence

[![make.fun](https://make.fun/badge/u-kiencx-out-of-tokens-mid-sentence-00f60233.svg)](https://make.fun)
[![rank](https://make.fun/badge/u-kiencx-out-of-tokens-mid-sentence-00f60233/ocoot/out-of-tokens-00f60233/rank.svg)](https://make.fun)
[![reward](https://make.fun/badge/u-kiencx-out-of-tokens-mid-sentence-00f60233/ocoot/out-of-tokens-00f60233/reward.svg)](https://make.fun)

Entry for the [make.fun](https://make.fun) competition
**Out of Tokens, Mid-Sentence** (`u-kiencx-out-of-tokens-mid-sentence-00f60233`):
the error message an AI agent shows when it runs out of tokens mid-sentence,
in one line of at most 140 characters.

## The entry

> Error: token supply exhausted. The sentence you were reading has been repossessed.

## How it works

`main.ts` (Node 22 TypeScript, run as-is) writes exactly that line to
`$MAKEFUN_OUTPUT_DIR/entry.txt` (fallback `/output`), with no trailing
newline, and guards the gate itself: 1–140 characters, not only whitespace,
a single line. It reads nothing from outside the repository and writes
nothing outside the output directory.
