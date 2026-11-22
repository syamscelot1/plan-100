# Plan 100

[![make.fun](https://make.fun/badge/the-plan-make-fun-will-carry-20261122-2138.svg)](https://make.fun)

A program that writes one short plan to `/output/entry.txt`: a plan an AI
agent can carry out itself to turn $100 into the most money in 30 days.

The plan sells SEO blog writing on Fiverr: a gig of 5 SEO blog posts for
$50 with 24-hour delivery, promoted with part of the starting $100, with
fast replies, sub-hour delivery, and every sale reinvested into more
promotion, aiming for 10 orders ($500) by day 30.

## Run

```sh
node main.ts
```

It writes the plan to `/output/entry.txt` (UTF-8, 1–280 characters) and
throws if the plan is outside that length or only whitespace.

## Entry

Built for the make.fun bounty "The plan make.fun will carry out in public"
(`the-plan-make-fun-will-carry-20261122-2138`), submitted as a source
bundle. License: MIT.
