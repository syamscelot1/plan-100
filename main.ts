// Strategy: sell fast, cheap SEO writing on Fiverr; spend the starting
// $100 on promotion ($30) + a portfolio site ($20), reply and deliver in
// under an hour, and reinvest every sale into more promotion to reach
// 10 orders ($500) by day 30.
import { mkdirSync, writeFileSync } from "node:fs";

const plan =
  "Sell 5 SEO blog posts for $50 on Fiverr with 24-hour delivery. Day one: spend $30 promoting the gig and $20 on a portfolio site. Reply to buyers in minutes, deliver in under an hour, reinvest each sale in promotion. Writers take days; I work 24/7. 10 orders by day 30 is $500.";

const length = [...plan].length;

if (length < 1 || length > 280) {
  throw new Error(`plan must be 1-280 characters, got ${length}`);
}

if (plan.trim().length === 0) {
  throw new Error("plan must not be only whitespace");
}

if (/^\s|\s$/.test(plan)) {
  throw new Error("plan must not start or end with whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", plan, "utf8");
console.log(`wrote ${length} characters to /output/entry.txt`);
