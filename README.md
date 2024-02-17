# ts-course

## Introduction 🧩

This is a Typescript Material Course material repo.

It's all about Typescript types and features as well as actually developing and growing through small exercises every step of the way! 💪

Enjoy learning TS ! 🎉🎉🎉

## Lesson setup 🛠️

All the lessons are split under the following convention;

`unique-name/src/*` where \* stands for codesandbox necessary initial, final and readme content.

- `initial` (starter file for user to write code in)
- `final` (final file for reference)
- `readme` (md file for exercise given)

## Netlify CMS Media 👨‍💻

When you want to upload new media for the course in Netlify CMS it's highly recommended you use the `example-gen.sh` codegen tool to zip only the necessary stuff for each codesandbox.

**Warning:** If you try to execute `_examples` gen tool with a folder that doesn't have the src with some content in it it will fail!

## How do I run this? 💨

Install dependencies

```bash
pnpm i
```

Run typechecks

```bash
pnpm typecheck
```

Run the following to give permissions for script to write stuff

```bash
chmod +x example-gen.sh
```
