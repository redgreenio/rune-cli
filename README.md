# Rune

A dead-simple command line tool to make [conventional commits](https://www.conventionalcommits.org).

## Install

```shell
npm install -g rune-cli
```

## Usage

`rune` is a drop-in replacement for `git commit -m <message>`. It lets you pick an appropriate conventional commit
type before making the actual commit. Just replace `git commit -m <message>` with `rune commit -m <message>`.

### Example
```shell
➜  your-project git:(main) rune commit -m "add installation instruction"
? Select the type of change you are committing: (Use arrow keys)
❯ feat:       A new feature 
  fix:        A bug fix 
  docs:       Documentation only changes 
  test:       Adding missing tests 
  refactor:   A code change that neither fixes a bug or adds a feature 
  style:      Markup, white-space, formatting, missing semi-colons... 
  perf:       A code change that improves performance 
(Move up and down to reveal more choices)
```

As usual, you can always use `rune -h` to find out more!

## License

```
Copyright 2021 Red Green, Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
```
