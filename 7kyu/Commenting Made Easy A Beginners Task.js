function comment(text, style) {
    const lines = text.split("\n")

    switch (style) {
        case "Bash":
            return lines.map(line => `# ${line}`).join("\n");

        case "Bash Multiline":
            return `: "\n${text}\n"`;

        case "JavaDoc":
            return `/**\n${lines.map(line => `* ${line}`).join("\n")}\n*/`;

        case "Python":
            return lines.map(line => `# ${line}`).join("\n");

        case "Python Multiline":
            return `"""\n${text}\n"""`;

        case "Javascript":
            return lines.map(line => `// ${line}`).join("\n");

        case "Javascript Multiline":
            return `/*\n${lines.join("\n")}\n*/`;

        case "SGML":
            return lines.map(line => `<!-- ${line} -->`).join("\n");

        case "SQL":
            return lines.map(line => `-- ${line}`).join("\n");

        default:
            return text;
    }
}

console.log(comment("line1\nline2\nline3", "Bash"));
console.log(comment("line1\nline2\nline3", "Bash Multiline"));
console.log(comment("line1\nline2\nline3", "JavaDoc"));
console.log(comment("line1\nline2\nline3", "Python"));
console.log(comment("line1\nline2\nline3", "Python Multiline"));
console.log(comment("line1\nline2\nline3", "Javascript"));
console.log(comment("line1\nline2\nline3", "Javascript Multiline"));
console.log(comment("line1\nline2\nline3", "SGML"));
console.log(comment("line1\nline2\nline3", "SQL"));
