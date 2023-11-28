import * as fs from "fs";

const csv = fs.readFileSync("./leetcode.csv", {encoding: "utf-8"}).split("\r\n");


fs.writeFileSync("flashcards.md", "");

for (let i = 1; i < csv.length; i++) {
	let row = csv[i]
	const number = row.slice(0, row.indexOf(","));
	row = row.slice(row.indexOf(",") + 1, row.length);
	const title =row.slice(0, row.indexOf(","));
	row = row.slice(row.indexOf("\"") + 1, row.length);
	const problem = row.slice(0, row.indexOf("\""));
        row = row.slice(row.indexOf("\"") + 2, row.length);
	const [_is_premium, difficulty, _solution_slug, _, __, url, ..._rest] = row.split(",")

	fs.appendFileSync("flashcards.md", `#flashcard #blind75
${number}: ${title}

${problem}

---
answer
---`)
	console.log(_solution_slug)
	break;
}
